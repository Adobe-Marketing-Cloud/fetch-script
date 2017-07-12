var testsContext = require.context('../src', true, /(^index)\.js$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('./', true, /\.js$/);
srcContext.keys().forEach(srcContext);
