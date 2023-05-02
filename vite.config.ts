/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'c8',
      all: true,
      enabled: true,
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.tsx'],
      exclude: ['**/main.tsx', '**/clientApp.tsx', '**/serverApp.tsx'],
    },
  },
});
