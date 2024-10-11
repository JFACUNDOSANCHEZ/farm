import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://nube02.sytes.net:24082', // Asegúrate de usar http
        changeOrigin: true,
        secure: false, // Puede estar en true si tu servidor tiene un certificado SSL válido
      },
    },
  },
});
