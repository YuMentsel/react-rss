import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import { Request, Response } from 'express';
import setupStore from './redux/store';
import { api } from './redux/api';
import App from './App';

export const render = async (req: Request, res: Response, parts: string, script: string) => {
  const store = setupStore({});
  store.dispatch(api.endpoints.getCharacters.initiate(''));
  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));
  const preloadedState = store.getState();

  const { pipe } = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={req.originalUrl}>
        <App />
      </StaticRouter>
    </Provider>,
    {
      bootstrapModules: [script],
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        res.write(parts[0]);
        pipe(res);
      },
      onAllReady() {
        const preloadedStateTemplate = `<script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}</script>`;
        res.write(parts[1].replace(`<!--preloaded-state-->`, preloadedStateTemplate ?? ''));
        res.end();
      },
      onError(err) {
        console.error(err);
      },
    }
  );
};
