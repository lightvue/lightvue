const fs = require('fs-extra');
const path = require('path');

copyComponentPackageJson();
copyCorePackageJson();
fs.copySync(path.resolve(__dirname, '../README.md'), path.resolve(__dirname,'./dist/README.md'));

function copyComponentPackageJson() {
  fs.readdirSync('./dist/').forEach(folder => {
    if (folder !== 'lightvue.css' && folder !== 'package.json' && folder !== 'README.md') {
      fs.copySync(path.resolve(__dirname, './component-package.json'), 'dist/' + folder + '/package.json');
      console.log(`Updated: /core-build/dist/${folder}/package.json`);
    }
    if (folder === 'skeleton') {
      fs.copySync(path.resolve(__dirname,'../core/components/skeleton/preset'), './dist/skeleton/preset');
    }

  });
}

function copyCorePackageJson() {
  // Make sure to update correct version in ./dist/package.json file.
  // Read the package.json file
  fs.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading package.json:', err);
      return;
    }

    // Parse the JSON data
    let packageJson;
    try {
      packageJson = JSON.parse(data);
    } catch (err) {
      console.error('Error parsing package.json:', err);
      return;
    }

    // Modify the package.json object
    // ...
    delete packageJson['scripts'];
    delete packageJson['devDependencies'];
    // Write the modified package.json back to file
    fs.writeFile(path.resolve(__dirname,'./dist/package.json'), JSON.stringify(packageJson, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing package.json:', err);
        return;
      }
      console.log('Updated:  /core-build/dist/package.json');
    });
  });
}
