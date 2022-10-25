const fs = require('fs-extra');
const path = require('path');

// fs.readdirSync(path.resolve(__dirname, './src/components/')).forEach(folder => {
//   fs.readdirSync(path.resolve(__dirname, './src/components/' + folder)).forEach(file => {
//     if (file === 'package.json' || file.endsWith('d.ts') || file.endsWith('vue')) {
//       fs.copySync(path.resolve(__dirname, './src/components/' + folder) + '/' + file, 'dist/' + folder + '/' + file);
//     }
//   });
// });

// fs.copySync(path.resolve(__dirname, './package.json'), 'dist/package.json');
// fs.copySync(path.resolve(__dirname, './README.md'), 'dist/README.md');
// fs.copySync(path.resolve(__dirname, './LICENSE.md'), 'dist/LICENSE.md');

fs.readdirSync('dist/').forEach(folder => {
  if (folder !== 'lightvue.css' && folder !== 'package.json' && folder !== 'README.md') {
    fs.copySync(path.resolve(__dirname, './package-build.json'), 'dist/' + folder + '/package.json');
  }
  if (folder === 'skeleton') {
    fs.copySync('core/components/skeleton/preset', 'dist/skeleton/preset');
  }
});

// Make sure to update correct version in ./dist/package.json file.
