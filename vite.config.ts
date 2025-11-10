import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "@solana/kit",
      "@solana-program/memo",
      "@solana-program/system",
      "@solana-program/token"
    ]
  }
})
