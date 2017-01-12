import babel from 'rollup-plugin-babel';

export default {
  moduleName: 'fetchScript',
  entry: 'src/fetch-script.js',
  plugins: [ babel() ],
  format: 'umd'
};
