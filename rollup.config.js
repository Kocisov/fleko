import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs({
      exclude: 'src/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ['react', 'react-motion-ui-pack', 'react-motion', 'react-icons']
}
