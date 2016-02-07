import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'es6/main.js',
  dest: 'dist/mapnya.iife.js',
  sourceMap: true,
  moduleName: 'Mapnya',
  format: 'iife',
  plugins: [ babel() ]
};
