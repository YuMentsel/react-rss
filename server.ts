import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { Request, Response } from 'express';
import { createServer as createViteServer, ViteDevServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 5173;
const isProd = process.env.NODE_ENV === 'production';

const createServer = async (root = process.cwd()) => {
  const app = express();
  let vite: ViteDevServer;

  if (!isProd) {
    vite = await createViteServer({
      root,
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
        hmr: true,
      },
      appType: 'custom',
    });

    app.use(vite.middlewares);
  } else {
    app.use(
      (await import('serve-static')).default(path.resolve(__dirname, './dist/client'), {
        index: false,
      })
    );
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;
      let render: (req: Request, res: Response, parts: string[], script: string) => void;

      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('./src/serverApp.tsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html'), 'utf-8');
        const entryPath = './dist/server/serverApp.js';
        render = (await import(entryPath)).render;
      }

      const script = isProd
        ? `./assets/${fs
            .readdirSync(path.resolve(__dirname, './dist/client/assets'))
            .filter((fn: string) => fn.endsWith('js'))}`
        : '';

      const parts = template.split(`<!--app-html-->`);

      render(req, res, parts, script);
    } catch (e) {
      vite?.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
};

createServer();
