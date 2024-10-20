import vue from 'rollup-plugin-vue';
// import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import filesize from 'rollup-plugin-filesize';
// import commonjs from 'rollup-plugin-commonjs';

import { terser } from 'rollup-plugin-terser';

// const fs = require('fs-extra');
// const path = require('path');

let entries = [];

// ask rollup to not bundle Vue in the library #warning-treating-module-as-external-dependency
let externals = ['vue', 'lightvue', 'lightvue/input', 'lightvue/button', 'lightvue/checkbox', 'lightvue/ripple', 'lightvue/tooltip', 'lightvue/utils', 'lightvue/mixins', 'lightvue/overlay-panel'];

let globalDependencies = {
  vue: 'Vue',
  'lightvue/ripple': 'lightvue.ripple',
  'lightvue/tooltip': 'lightvue.tooltip',
  'lightvue/utils': 'lightvue.utils',
  'lightvue/mixins': 'lightvue.mixins',
  'lightvue/button': 'lightvue.button',
  'lightvue/input': 'lightvue.input',
  'lightvue/checkbox': 'lightvue.checkbox',
  'lightvue/overlay-panel': 'lightvue.overlay-panel',
  // 'lightvue/utils/DomHandler': 'lightvue.utils-DomHandler',
  // 'lightvue/utils/ConnectedOverlayScrollHandler': 'lightvue.utils-ConnectedOverlayScrollHandler',
  // 'lightvue/utils/ObjectUtils': 'lightvue.utils-ObjectUtils',

  // 'lightvue/dialog': 'lightvue.dialog',
  // 'lightvue/paginator': 'lightvue.paginator',
  // 'lightvue/confirmationeventbus': 'lightvue.confirmationeventbus',
  // 'lightvue/toasteventbus': 'lightvue.toasteventbus',
  // 'lightvue/useconfirm': 'lightvue.useconfirm',
  // 'lightvue/usetoast': 'lightvue.usetoast',
  // 'lightvue/progress-bar': 'lightvue.progressbar',
  // 'lightvue/message': 'lightvue.message',
  // 'lightvue/dropdown': 'lightvue.dropdown',
  // 'lightvue/menu': 'lightvue.menu',
  // '@fullcalendar/core': 'FullCalendar'
};

const baseConfig = {
  plugins: {
    preVue: [
      scss({
        output: 'dist/lightvue.css',
        outputStyle: 'compressed',
      }),
      // postcss({
      //   extract: true,
      //   // Or with custom file name, it will generate file relative to bundle.js in v3
      //   // extract: 'dist/my-custom-file-name.css'
      // }),
    ],
    postVue: [
      terser(),
      filesize({
        // This method will be helpful to generate size file.
        // reporter: [
        //   function (options, bundle, {
        //     minSize, gzipSize, brotliSize, bundleSize,
        //     fileName,
        //     // "showBeforeSizes: release"
        //     lastVersion,
        //     // "showBeforeSizes: "release" or "showBeforeSizes": "build"
        //     bundleSizeBefore, brotliSizeBefore, minSizeBefore, gzipSizeBefore
        //   }) {
        //     // If a promise is returned, it will be awaited before rendering.
        //     // return promise;
        //     console.log(fileName,gzipSize, gzipSizeBefore);
        //   },
        // ],
      }),
    ],
  },
};

function addEntry(inFolder, inFile, outFolder, outFile) {
  const inputFile = '../core/' + inFolder + '/' + inFile;
  const outputFile = './dist/' + outFolder + '/' + outFile;
  entries.push({
    external: externals,
    input: inputFile,
    output: [
      {
        format: 'cjs',
        file: outputFile + '.js',
        exports: 'auto',
      },
    ],
    plugins: [
      ...baseConfig.plugins.preVue,
      vue({
        template: {
          isProduction: true,
          optimizeSSR: true,
        },
        // css: false,
      }),
      ...baseConfig.plugins.postVue,
    ],
  });

  entries.push({
    external: externals,
    input: inputFile,
    output: [
      {
        format: 'esm',
        file: outputFile + '.esm.js',
      },
    ],
    plugins: [
      ...baseConfig.plugins.preVue,
      vue({
        template: {
          isProduction: true,
        },
        // css: false,
      }),
      ...baseConfig.plugins.postVue,
    ],
  });

  entries.push({
    external: externals,
    input: inputFile,
    output: [
      {
        format: 'iife',
        name: 'lightvue.' + outFolder,
        file: outputFile + '.min.js',
        // sourcemap: true,
        globals: globalDependencies,
      },
    ],
    plugins: [
      ...baseConfig.plugins.preVue,
      vue({
        template: {
          isProduction: true,
        },
        // css: false,
      }),
      // terser(),
      ...baseConfig.plugins.postVue,
    ],
  });
}

function addSFC() {
  // fs.readdirSync(path.resolve(__dirname, '../core/')).forEach(folder => {
  //     fs.readdirSync(path.resolve(__dirname, '../core/' + folder)).forEach(file => {
  //         let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();
  //         if (/\.vue$/.test(file) && (name === folder)) {
  //             addEntry(folder, file, name);
  //         }
  //     });
  // });
  addEntry('components/badge', 'index.js', 'badge', 'index');
  addEntry('components/button', 'index.js', 'button', 'index');
  addEntry('components/card', 'index.js', 'card', 'index');
  addEntry('components/glass-card', 'index.js', 'glass-card', 'index');
  addEntry('components/checkbox', 'index.js', 'checkbox', 'index');
  addEntry('components/checkbox-group', 'index.js', 'checkbox-group', 'index');
  addEntry('components/collapsible', 'index.js', 'collapsible', 'index');
  addEntry('components/color-picker', 'index.js', 'color-picker', 'index');
  addEntry('components/dialog', 'index.js', 'dialog', 'index');
  addEntry('components/drawer', 'index.js', 'drawer', 'index');
  addEntry('components/dropdown', 'index.js', 'dropdown', 'index');
  addEntry('components/input', 'index.js', 'input', 'index');
  addEntry('components/loaders', 'index.js', 'loaders', 'index');
  addEntry('components/notification', 'index.js', 'notification', 'index');
  addEntry('components/number', 'index.js', 'number', 'index');
  addEntry('components/overlay-panel', 'index.js', 'overlay-panel', 'index');
  addEntry('components/progress-bar', 'index.js', 'progress-bar', 'index');
  addEntry('components/progress-spinner', 'index.js', 'progress-spinner', 'index');
  addEntry('components/radio-group', 'index.js', 'radio-group', 'index');
  addEntry('components/range-slider', 'index.js', 'range-slider', 'index');
  addEntry('components/rating', 'index.js', 'rating', 'index');
  addEntry('components/skeleton', 'index.js', 'skeleton', 'index');
  addEntry('components/slider', 'index.js', 'slider', 'index');
  addEntry('components/text-editor', 'index.js', 'text-editor', 'index');
  addEntry('components/textarea', 'index.js', 'textarea', 'index');
  addEntry('components/toast', 'index.js', 'toast', 'index');
  addEntry('components/toggle-switch', 'index.js', 'toggle-switch', 'index');
}

function addDirectives() {
  // directives
  addEntry('directives/tooltip', 'index.js', 'tooltip', 'index'); // CSS isn't being injected.
  addEntry('directives/ripple', 'index.js', 'ripple', 'index');
}

// function addConfig() {
//     addEntry('config', 'lightVue.js', 'config');
// }

function addUtils() {
  addEntry('mixins', 'index.js', 'mixins', 'index');
  addEntry('utils', 'index.js', 'utils', 'index');
}

// function addApi() {
//     addEntry('api', 'Api.js', 'api');
// }

// function addServices() {
//     addEntry('confirmationservice', 'ConfirmationService.js', 'confirmationservice');
//     addEntry('confirmationeventbus', 'ConfirmationEventBus.js', 'confirmationeventbus');
//     addEntry('useconfirm', 'UseConfirm.js', 'useconfirm');
//     addEntry('toastservice', 'ToastService.js', 'toastservice');
//     addEntry('toasteventbus', 'ToastEventBus.js', 'toasteventbus');
//     addEntry('usetoast', 'UseToast.js', 'usetoast');
//     addEntry('terminalservice', 'TerminalService.js', 'terminalservice');
// }

addSFC();
// addConfig();
addUtils();
addDirectives();
// addApi();
// addServices();

export default entries;
