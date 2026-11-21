import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const config = {
  input: 'react-dice.jsx',
  external: ['react', 'prop-types'],
  output: {
      format: 'umd',
      name: 'react-dice-roller',
      globals: {
          react: "React",
          'prop-types': "PropTypes"
      }
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: "node_modules/**"
    }),
    terser(),
  ],
}
export default config