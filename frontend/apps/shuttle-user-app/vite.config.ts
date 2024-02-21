/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/frontend/apps/shuttle-user-app',

  server: {
    port: 4200,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [ react(), nxViteTsPaths() ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../../dist/frontend/apps/shuttle-user-app',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
  },

  test: {
    globals: true,
    cache: { dir: '../../../node_modules/.vitest' },
    environment: 'jsdom',
    include: [ 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ],

    reporters: [ 'default' ],
    coverage: {
      reportsDirectory: '../../../coverage/frontend/apps/shuttle-user-app',
      provider: 'v8',
    },
  },
});