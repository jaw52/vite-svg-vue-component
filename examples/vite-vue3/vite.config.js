import svgPlugin from 'vite-svg-vue-component'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    svgPlugin(),
  ],
})
