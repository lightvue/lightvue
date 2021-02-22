import vue from 'rollup-plugin-vue';
// import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import filesize from 'rollup-plugin-filesize';
// import commonjs from 'rollup-plugin-commonjs';

import { terser } from 'rollup-plugin-terser';

const fs = require('fs-extra');
const path = require('path');

let entries = [];

// ask rollup to not bundle Vue in the library #warning-treating-module-as-external-dependency
let externals = ['vue', 'lightvue/input', 'lightvue/button'];

let globalDependencies = {
  vue: 'Vue',
  // 'lightvue/ripple': 'lightvue.ripple',
  // 'lightvue/utils': 'lightvue.utils',
  'lightvue/button': 'lightvue.button',
  'lightvue/input': 'lightvue.input',
  // 'lightvue/dialog': 'lightvue.dialog',
  // 'lightvue/paginator': 'lightvue.paginator',
  // 'lightvue/confirmationeventbus': 'lightvue.confirmationeventbus',
  // 'lightvue/toasteventbus': 'lightvue.toasteventbus',
  // 'lightvue/useconfirm': 'lightvue.useconfirm',
  // 'lightvue/usetoast': 'lightvue.usetoast',
  // 'lightvue/progressbar': 'lightvue.progressbar',
  // 'lightvue/message': 'lightvue.message',
  // 'lightvue/dropdown': 'lightvue.dropdown',
  // 'lightvue/menu': 'lightvue.menu',
  // '@fullcalendar/core': 'FullCalendar'
};

const baseConfig = {
  plugins: {
    preVue: [scss()],
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
  const inputFile = 'core/' + inFolder + '/' + inFile;
  const outputFile = 'dist-lib/' + outFolder + '/' + outFile;
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
  addEntry('components/buttons', 'Button.vue', 'button', 'button');
  // addEntry('components/card', 'Card.vue', 'card', 'index');
  // addEntry('components/card', 'GlassCard.vue', 'glass-card', 'glass-card');
  // addEntry('components/checkbox', 'Checkbox.vue', 'checkbox', 'checkbox');
  // addEntry('components/colorpicker', 'ColorPicker.vue', 'color-picker', 'color-picker');
  // addEntry('components/dropdown', 'Dropdown.vue', 'dropdown', 'dropdown');
  addEntry('components/input', 'Input.vue', 'input', 'input');
  // addEntry('components/input-toggle', 'ToggleSwitch.vue', 'toggle-switch', 'toggle-switch');
  addEntry('components/number', 'Number.vue', 'number', 'number');
  // addEntry('components/overlay-panel', 'OverlayPanel.vue', 'overlay-panel', 'overlay-panel');
  // addEntry('components/progressbar', 'ProgressBar.vue', 'progress-bar', 'progress-bar');
  // addEntry('components/progressspinner', 'ProgressSpinner.vue', 'progress-spinner', 'progress-spinner');
  // addEntry('components/rating', 'Rating.vue', 'rating', 'rating');
  // addEntry('components/skeleton', 'Skeleton.vue', 'skeleton', 'skeleton');
  // addEntry('components/slider', 'Slider.vue', 'slider', 'slider');
  // addEntry('components/textarea', 'Textarea.vue', 'textarea', 'textarea');

  // directives
  // addEntry('directives/tooltip', 'Tooltip.js', 'tooltip', 'tooltip');
  // addEntry('directives/ripple', 'Ripple.js', 'ripple', 'ripple');
}

// function addDirectives() {
//     addEntry('badgedirective', 'BadgeDirective.js', 'badgedirective');
//     addEntry('ripple', 'Ripple.js', 'ripple');
//     addEntry('tooltip', 'Tooltip.js', 'tooltip');
// }

// function addConfig() {
//     addEntry('config', 'lightVue.js', 'config');
// }

// function addUtils() {
//     addEntry('utils', 'Utils.js', 'utils');
// }

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
// addDirectives();
// addConfig();
// addUtils();
// addApi();
// addServices();

export default entries;
