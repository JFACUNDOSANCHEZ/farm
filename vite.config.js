import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://nube02.sytes.net:24082', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
