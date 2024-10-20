import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Ensures the build output goes to the 'build' folder
  },
  base: '/my-port/',  // Add this line
});
