import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: '/goit-js-hw-12/',
  plugins: [
    react(),
    injectHTML(),
    FullReload(['./src/**/**.html']),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: 'index.html',
    },
  },
});
