import matchers from '@testing-library/jest-dom/matchers';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './src/mocks/server';

expect.extend(matchers);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
