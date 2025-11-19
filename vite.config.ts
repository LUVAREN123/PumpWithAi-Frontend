import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vitePluginSvgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSvgr()
  ],
  optimizeDeps: {
    include: [
      "@solana/kit",
      "@solana-program/memo",
      "@solana-program/system",
      "@solana-program/token"
    ]
  }
})
