import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/S1lvaMovies/', // Substitua pelo nome do seu repositório
  plugins: [react()],
});
