# karma-jsenv-preprocessor

> Preprocessor that exports .jsenv files as CommonJS modules, making them available to Karma tests.

## Installation

Install it as a development-only dependency in your `package.json`, issuing:
```bash
npm install git://github.com/cotap/karma-jsenv-preprocessor#0.1.0 --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    files: [
      ...
      '**/*.jsenv'
    ],

    preprocessors: {
      '**/*.jsenv': ['jsenv']
    }
  });
};
```

[homepage]: http://karma-runner.github.com
