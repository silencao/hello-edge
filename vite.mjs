import {build} from 'vite';
// import resolve    from '@rollup/plugin-node-resolve';
// import terser from 'rollup-plugin-terser';

build({
    // plugins: [
    //     resolve()
    // ],
    build: {
        outDir: 'res',
        minify: false,
        // minify: 'terser',
        rollupOptions: {
            // external: ['vue'],
            // treeshake: false,
            input  : 'raw/vue.runtime.esm-browser.js',


        }
    }
})