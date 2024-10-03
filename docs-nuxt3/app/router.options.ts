import type { RouterConfig } from '@nuxt/schema';

export default {
  routes: _routes => [
    {
      path: '/',
      name: 'Home',
      meta:{
        title: 'Emerging Collection of well Crafted UI Components | LightVue',
        desc: 'The Emerging UI Component library for Vue 2.x & Vue 3.x',
      },
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/vue-components',
      component: () => import('@/components/DocsLayout.vue'),
      children: [
        {
          path: 'input',
          meta:{
            title: 'Input Documentation',
            desc: 'Light-input provides with a variety of input fields with various available customizations which helps it to fulfil the need of almost every web application/project.',
          },
          component: () => import('@/pages/vue-components/input.vue'),
        },
        {
          path: 'inline-input',
          meta:{
            title: 'Inline Input',
            desc: 'Customizable inline input component for seamless, responsive text entry with real-time validation and accessibility support.',
          },
          component: () => import('@/pages/vue-components/inline-input.vue'),
        },
        {
          path: 'button',
          meta:{
            title: 'Button',
            desc: 'Button is an extension to standard button element with an option to add icons and your custom theming.',
          },
          component: () => import('@/pages/vue-components/button.vue'),
        },
        {
          path: 'checkbox',
          meta:{
            title: 'Checkbox',
            desc: 'LvCheckbox component can be used in projects where a way is required for user to select or deselect an option.',
          },
          component: () => import('@/pages/vue-components/checkbox.vue'),
        },
        {
          path: 'checkbox-group',
           meta:{
            title: 'Checkbox Group',
            desc: 'LvCheckboxGroup component can be used when user needs to select or deselect options from a given array of options.',
          },
          component: () => import('@/pages/vue-components/checkbox-group.vue'),
        },
        {
          path: 'drawer',
           meta:{
            title: 'Drawer',
            desc: 'LvDrawer is a customizable navigation drawer for smooth, responsive side-menu functionality with seamless transitions and accessibility support.',
          },
          component: () => import('@/pages/vue-components/drawer.vue'),
        },
        {
          path: 'radio',
           meta:{
            title: 'Radio',
            desc: 'LvRadio component can be used in projects where a way is required for user to select or deselect an option.',
          },
          component: () => import('@/pages/vue-components/radio.vue'),
        },
        {
          path: 'radio-group',
           meta:{
            title: 'Radio Group',
            desc: 'LvRadioGroup component can be used when user needs to select or deselect options from a given array of options.',
          },
          component: () => import('@/pages/vue-components/radio-group.vue'),
        },
        {
          path: 'card',
           meta:{
            title: 'Card',
            desc: 'Card components can be used as flexible containers/wrappers for other UI elements.',
          },
          component: () => import('@/pages/vue-components/card.vue'),
        },
        // {
        //   path: 'checkbox-group',
        //    meta:{
        //     title: '',
        //     desc: '',
        //   },
        //   component: () => import('@/pages/vue-components/checkbox-group.vue'),
        // },
        {
          path: 'color-picker',
           meta:{
            title: 'Color Picker',
            desc: 'LvColorpicker can be used when a user needs to pick a color. Additionally, a customized color palette can also be passed as an array.',
          },
          component: () => import('@/pages/vue-components/color-picker.vue'),
        },
        {
          path: 'dialog',
           meta:{
            title: 'Dialog',
            desc: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. LvDialog helps the user to have modal and additional dialog box with their data.',
          },
          component: () => import('@/pages/vue-components/dialog.vue'),
        },
        {
          path: 'dropdown',
           meta:{
            title: 'Dropdown',
            desc: 'Dropdown component allows user to choose an option from the provided options.',
          },
          component: () => import('@/pages/vue-components/dropdown.vue'),
        },
        {
          path: 'glassmorphic-card',
           meta:{
            title: 'Glassmorphic Card',
            desc: 'Glass Card components can be used as elegant containers/wrappers for placing content over images.',
          },
          component: () => import('@/pages/vue-components/glassmorphic-card.vue'),
        },
        // {
        //   path: 'loaders',
        //    meta:{
        //     title: 'Progress Loaders',
        //     desc: 'Progress Loader components can be used as a loading animations or space-fillers while waiting for the actual content to load.',
        //   },
        //   component: () => import('@/pages/vue-components/loaders.vue'),
        // },
        {
          path: 'notification',
           meta:{
            title: 'Notification',
            desc: 'Notification component of LightVue allow the user to show notifications on the page with any required content.',
          },
          component: () => import('@/pages/vue-components/notification.vue'),
        },
        {
          path: 'number',
           meta:{
            title: 'Number',
            desc: 'Input Number component allows user to Take Number as a input.',
          },
          component: () => import('@/pages/vue-components/number.vue'),
        },
        {
          path: 'overlay-panel',
           meta:{
            title: 'Overlay Panel',
            desc: 'Overlay Panel is a container component positioned as connected to its target.',
          },
          component: () => import('@/pages/vue-components/overlay-panel.vue'),
        },
        {
          path: 'page-loader',
           meta:{
            title: 'Progress Loader components can be used as a loading animations or space-fillers while waiting for the actual content to load.',
            desc: '',
          },
          component: () => import('@/pages/vue-components/page-loader.vue'),
        },
        {
          path: 'progress-bar',
           meta:{
            title: 'Progress Bar',
            desc: 'Progress Bar component can be used as a process status indicator for a time-consuming process.',
          },
          component: () => import('@/pages/vue-components/progress-bar.vue'),
        },
        {
          path: 'progress-spinner',
           meta:{
            title: 'Progress Spinner',
            desc: 'Progress spinner components can be used as a loading animations or space-fillers while waiting for the actual content to load.',
          },
          component: () => import('@/pages/vue-components/progress-spinner.vue'),
        },
        {
          path: 'rating',
           meta:{
            title: 'Rating',
            desc: 'Rating component can be used when user wants to provide an option to rate the products/services provided.',
          },
          component: () => import('@/pages/vue-components/rating.vue'),
        },
        {
          path: 'ripple',
           meta:{
            title: 'Ripple effect',
            desc: 'Add a material ripple effect on click, to any DOM element/Vue component.',
          },
          component: () => import('@/pages/vue-components/ripple.vue'),
        },
        {
          path: 'shimmer',
           meta:{
            title: 'Skeleton | Shimmer Loaders',
            desc: 'Skeleton (shimmer) Loader components can be used as a loading animations or space-fillers while waiting for the actual content to load.',
          },
          component: () => import('@/pages/vue-components/shimmer.vue'),
        },
        {
          path: 'slider',
           meta:{
            title: 'Slider',
            desc: 'Slider is another basic component from light vue which provide user to have a slider in the web application which can be used to rate or select a range.',
          },
          component: () => import('@/pages/vue-components/slider.vue'),
        },
        {
          path: 'collapsible',
           meta:{
            title: 'Collapsible',
            desc: 'Collapsible component easily toggles visibility of almost any content on your pages in a vertically and horizontally collapsing container',
          },
          component: () => import('@/pages/vue-components/collapsible.vue'),
        },
        {
          path: 'badge',
           meta:{
            title: 'Badge',
            desc: 'The LvBadge component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.',
          },
          component: () => import('@/pages/vue-components/badge.vue'),
        },
        {
          path: 'textarea',
           meta:{
            title: 'Textarea',
            desc: 'Textarea component allows user to write long text/ paragraphs.',
          },
          component: () => import('@/pages/vue-components/textarea.vue'),
        },
        {
          path: 'text-editor',
           meta:{
            title: 'Text Editor',
            desc: 'LvTextEditor is WYSIWYG editor that lets users format content, align content, embed links & more.',
          },
          component: () => import('@/pages/vue-components/text-editor.vue'),
        },
        {
          path: 'toast',
           meta:{
            title: 'Toast',
            desc: 'Toast allows to show toast messages with the page or after an action is performed.',
          },
          component: () => import('@/pages/vue-components/toast.vue'),
        },
        {
          path: 'toggle-switch',
           meta:{
            title: 'Toggle Switch',
            desc: 'ToggleSwitch is used to select a boolean value i.e. it allows you to select or deselect an attribute.',
          },
          component: () => import('@/pages/vue-components/toggle-switch.vue'),
        },
        {
          path: 'tooltip',
           meta:{
            title: 'Tooltip',
            desc: 'Tooltips can be used to show additional information about any element upon hovering over it.',
          },
          component: () => import('@/pages/vue-components/tooltip.vue'),
        },
      ],
    },
    {
      path: '/getting-started',
       meta:{
            title: '',
            desc: '',
          },
      component: () => import('@/components/DocsLayout.vue'),
      children: [
        {
          path: 'installation',
           meta:{
            title: 'Installation Docs',
            desc: 'Get started with LightVue by installing the lightweight, customizable Vue components library for modern web apps.',
          },
          component: () => import('@/pages/getting-started/installation.vue'),
        },
        {
          path: 'light-icons',
           meta:{
            title: 'Light Icons Documentation',
            desc: 'Handpicked collection of premium & lightwighted icons as font.',
          },
          component: () => import('@/pages/getting-started/light-icons.vue'),
        },
      ],
    },
  ],
} satisfies RouterConfig
