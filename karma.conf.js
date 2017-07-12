module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    colors: true,
    client: {
      clearContext: false
    },
    failOnEmptyTestSuite: false,
    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html', subdir: 'html' }
      ],
    },
    frameworks: [
      'jasmine',
    ],
    files: [
      'fixtures/existing.js',
      'tests/tests.index.js',
    ],
    preprocessors: {
      'tests/tests.index.js': ['webpack', 'sourcemap'],
    },
    reporters: config.coverage ? ['progress', 'coverage'] : ['progress', 'kjhtml'],
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            enforce: 'pre',
            test: /.spec\.js$/,
            include: /tests/,
            exclude: /node_modules/,
            use: [{ loader: 'babel-loader' }]
          },
          {
            enforce: 'pre',
            test: /\.js$/,
            include: /src/,
            exclude: /node_modules/,
            use: [{ loader: 'istanbul-instrumenter-loader', query: { esModules: true } }]
          },

          {
            test: /\.js$/,
            include: /src/,
            exclude: /node_modules|tests/,
            use: [{ loader: 'babel-loader' }]
          },
        ],
      },
    },

  });
};
