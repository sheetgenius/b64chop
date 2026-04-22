import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './qa',
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'https://b64chop.radicchio.page',
    headless: true,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});
