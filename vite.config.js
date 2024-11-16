import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/S1lvaMovies/', // Caminho base para o GitHub Pages
  plugins: [react()],
});
