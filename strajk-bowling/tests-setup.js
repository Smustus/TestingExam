import { afterAll, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { server } from './src/mocks/setup';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  cleanup();
});

afterAll(() => {
  server.close();
});