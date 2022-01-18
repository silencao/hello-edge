import resolve    from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { rollup } from 'rollup';


rollup({
    input  : 'vue',
    // input  : 'raw/vue.runtime.esm-browser.js',
    plugins: [
        resolve({

        }),
        {
            resolveId(source, importer, options) {

            },
        }
    ],
}).then(bundle => bundle.write({
    file: 'bundle.js',
    format: 'es',
}));