const ToggleSwitchAPI = {
  props: [
    {
      name: 'header',
      type: 'String',
      default: '',
      description: 'Defines the header value',
    },
    {
      name: 'footer',
      type: 'String',
      default: '',
      description: 'Defines the footer value',
    },
    {
      name: 'visible',
      type: 'Boolean',
      default: 'true',
      description: 'Controls the visibility of Dialog',
    },
    {
      name: 'contentStyle',
      type: 'String',
      default: '',
      description: 'Defines the content Style of the Dialog',
    },
    // {
    //   name: 'rtl',
    //   type: 'Boolean',
    //   default: 'true',
    //   description: 'Input element with rounded corners',
    // },
    {
      name: 'maximizable',
      type: 'Boolean',
      default: 'true',
      description: 'Configures if the dialog will be maximizable or not',
    },
    {
      name: 'closable',
      type: 'Boolean',
      default: 'true',
      description: 'Configures if the dialog will be closable or not',
    },
    {
      name: 'showHeader',
      type: 'Boolean',
      default: 'true',
      description: 'Configures if the dialog will be showing header or not',
    },
    {
      name: 'baseZIndex',
      type: 'Number',
      default: '0',
      description: 'Configures the base Z index of the Dialog',
    },
    {
      name: 'autoZIndex',
      type: 'Boolean',
      default: 'true',
      description: 'Configures z index automatically if passed.',
    },
    {
      name: 'position',
      type: 'String',
      default: 'center',
      description: 'Configures position of dialog box',
    },
    {
      name: 'ariaCloseLabel',
      type: 'String',
      default: 'close',
      description: 'Configures close label of Dialog',
    },
  ],
  events: [
    {
      name: 'input-native',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    // {
    //   name: 'input',
    //   params: [
    //     {
    //       name: 'value',
    //       type: 'String',
    //       description: 'Value of the input field, at any time.',
    //     },
    //   ],
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'update:modelValue',
    //   params: [
    //     {
    //       name: 'value',
    //       type: 'String',
    //       description: 'Value of the input field, at any time.',
    //     },
    //   ],
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'change',
    //   params: [
    //     {
    //       name: 'value',
    //       type: 'String',
    //       description: 'Value of the input field, at any time.',
    //     },
    //   ],
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'click',
    //   params: [
    //     {
    //       name: 'value',
    //       type: 'String',
    //       description: 'Value of the input field, at any time.',
    //     },
    //   ],
    //   description: 'Input element with rounded corners',
    // },
    // {
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
  ],
};
export default ToggleSwitchAPI;
