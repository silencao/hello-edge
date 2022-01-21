import resolve    from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { rollup } from 'rollup';


rollup({
    // input  : 'vue',
    input  : 'node_modules/vue/dist/vue.runtime.esm-browser.js',
    plugins: [
        // resolve({
        //
        // }),
        terser({
            compress: {
                ecma: 2015,
                pure_getters: true
            },
            safari10: true,
        }),
        // {
        //     resolveId(source, importer, options) {
        //
        //     },
        // }
    ],
}).then(bundle => bundle.write({
    file: 'bundle.js',
    format: 'esm',
}));