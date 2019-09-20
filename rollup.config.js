import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [{
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    plugins: [
        resolve({
            only: ['src'],
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**', // 只编译我们的源代码
            runtimeHelpers: true,
        }),
    ],
}, {
    input: 'src/index.js',
    output: {
        file: 'dist/index.mjs',
        format: 'es',
    },
    plugins: [
        resolve({
            only: ['src'],
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**', // 只编译我们的源代码
            runtimeHelpers: true,
        }),
    ],
}];