import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    port: 5174 
  },
  // No need to define process.env, Vite handles this automatically
  define: {
    'process.env': {}  // Optional polyfill if needed for some legacy libraries
  },
});
