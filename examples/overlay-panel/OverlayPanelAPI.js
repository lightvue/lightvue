const OverlayPanelAPI = {
  props: [
    {
      name: 'dismissable',
      type: 'Boolean',
      default: 'true',
      description: 'Configures if the overplay panel is dismissible or not.',
    },
    {
      name: 'showCloseIcon',
      type: 'Boolean',
      default: 'false',
      description: 'Configures if the close icon needs to be displayed or not.',
    },
    {
      name: 'appendTo',
      type: 'String',
      default: '',
      description: 'Configures where to what overplay panel needs to be appended.',
    },
    {
      name: 'baseZIndex',
      type: 'Number',
      default: '0',
      description: 'Configures the base Z index of overlay panel.',
    },
    {
      name: 'autoZindex',
      type: 'Boolean',
      default: 'true',
      description: 'Configures if the Z index should be auto or not.',
    },
    {
      name: 'ariaCloseLabel',
      type: 'String',
      default: 'close',
      description: 'Configures the close label.',
    },
    {
      name: 'alignRight',
      type: 'Boolean',
      default: 'false',
      description: 'Configures if the overlay panel should be aligned to right or not.',
    },
    {
      name: 'closeOnResize',
      type: 'Boolean',
      default: 'false',
      description: 'Configures if the overlay panel should be closed when resized.',
    },
  ],
  // events: [
  //   {
  //     name: 'input-native',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'input',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'update:modelValue',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'change',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'click',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'focus',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'blur',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  // ],
};
export default OverlayPanelAPI;
