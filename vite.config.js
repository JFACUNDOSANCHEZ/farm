import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://nube02.sytes.net:24082', // URL para el entorno local
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
