import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// import { inspectAttr } from 'kimi-plugin-inspect-react'  // لو مش موجود، امسح السطر ده أو علّق عليه

// https://vite.dev/config/
export default defineConfig({
  base: '/seera-tech/',  // ← غيّر ده لاسم الريبو بالضبط (مع / في الأول والآخر)

  plugins: [react()],  // لو inspectAttr مش ضروري، خليه كده بس react

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})