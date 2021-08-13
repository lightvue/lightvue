const path = require('path');
const pkg = require('../package.json');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/../docs/src'),
        'lightvue/tooltip': path.join(__dirname, '/../core/directives/tooltip'),
        'lightvue/ripple': path.join(__dirname, '/../core/directives/ripple'),
        'lightvue/utils': path.join(__dirname, '/../core/utils'),
        'lightvueDocs/example': path.join(__dirname, '/../examples'),
        'lightvue/mixins': path.join(__dirname, '/../core/mixins'),
        lightvue: path.join(__dirname, '/../core/components'),
        splitpanes: path.join(__dirname, '/src/components/splitpanes'),
        // '@@@': path.join(__dirname, '/..'), // this must never be used, resulting infinite loop.
      },
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = pkg.title;
      return args;
    });
  },
};
