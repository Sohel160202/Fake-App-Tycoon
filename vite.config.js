// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // ensure it looks in the root
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
});
