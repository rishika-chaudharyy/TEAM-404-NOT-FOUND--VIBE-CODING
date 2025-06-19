// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@react-three/fiber',
        '@react-three/drei',
        'three',
        'react-router-dom',
        '@use-gesture/react' // 👈 Add this line
      ],
    },
  },
});
