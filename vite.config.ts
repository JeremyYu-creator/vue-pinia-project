import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  css: {
    preprocessorOptions: {
        less: {
        additionalData:  `@import "${resolve(__dirname, 'src/assets/style/global.less')}";`,
        javascriptEnabled: true,
      }
    }
  }
})
