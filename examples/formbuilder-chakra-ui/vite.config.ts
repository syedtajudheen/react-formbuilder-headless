import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-formbuilder-headless': path.resolve(__dirname, '../../packages/react-formbuilder-headless/src'),
      "@": path.resolve(__dirname, "./src"),
    }
  },
  root: path.resolve(__dirname), // Set the root to the project root
})
