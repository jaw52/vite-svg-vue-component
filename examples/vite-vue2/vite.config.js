import vue2 from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'
import svgPlugin from 'vite-svg-vue-component'

export default defineConfig({
  plugins: [
    vue2(),
    svgPlugin({ optimize: true }),
  ],
})
