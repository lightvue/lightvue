const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/../docs/src'),
        'lightvue/tooltip': path.join(__dirname, '/../core/directives/tooltip'),
        'lightvue/ripple': path.join(__dirname, '/../core/directives/ripple'),
        'lightvue/utils': path.join(__dirname, '/../core/utils'),
        'lightvue/example': path.join(__dirname, '/../examples'),
        lightvue: path.join(__dirname, '/../core/components'),
        splitpanes: path.join(__dirname, '/src/components/splitpanes'),
        // '@@@': path.join(__dirname, '/..'), // this must never be used, resulting infinite loop.
      },
    },
  },
};
