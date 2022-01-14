import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: 'src/main.ts'
    }
  },
  server: {
    host:true,
    // host: 'extension://hlhfphoingdaaeblmkljpjlgcokhlgkn/',
    origin: 'chrome-extension://hlhfphoingdaaeblmkljpjlgcokhlgkn/'
  }
  // server: {
  //   hmr: {
  //     host: 'localhost'
  //   }
  // }
})
