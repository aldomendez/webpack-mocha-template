
    var testsContext = require.context("../../test/mocha", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    