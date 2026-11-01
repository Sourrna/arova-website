import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    channel: 'msedge',
    baseURL: 'http://localhost:4321',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run build && npm run preview',
    port: 4321,
    reuseExistingServer: true,
    timeout: 120000,
  },
});
