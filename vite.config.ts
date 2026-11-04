import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // exposes on all local IPs (e.g. 192.168.31.215)
    port: 3000,
    open: false
  }
});
