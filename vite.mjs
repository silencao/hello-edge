import vue     from '@vitejs/plugin-vue';
import {build} from 'vite';
// import resolve    from '@rollup/plugin-node-resolve';
// import terser from 'rollup-plugin-terser';

build({
    configFile: false,
    envFile: false,
    plugins: [vue()],
    build: {
        watch: {
            include: 'src/**'
        },
        rollupOptions: {
            external: ['vue'],
            input: {
                popup: 'src/popup.ts',
                background: 'src/background.ts',
            },
            output: {
                entryFileNames: '[name].js',
                paths: {
                    vue: '/dist/vue.js',
                }
            }
        }
    }
})