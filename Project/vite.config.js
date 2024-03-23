import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:3000',
        changeOrigin:true,
        rewrite: (path) => path.replace(/api/,''),
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
