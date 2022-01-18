import { defineConfig } from 'vite'
import vue              from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: {
                vue: 'vue',
                popup: 'src/main.ts',
                background: 'src/background.ts'
            },
            output: {
                entryFileNames: '[name].js'
            }
        },
        watch: {
            include: 'src/**'
        },
    },
    server: {
        host: true,
    }
})
