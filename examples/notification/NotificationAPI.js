const NotificationAPI = {
  props: [
    {
      name: 'group',
      type: 'Strung',
      default: '',
      description: 'Configures the grouping of notification.',
    },
    {
      name: 'position',
      type: 'String',
      default: 'top-right',
      description: 'Configures the position of notification.',
    },
    {
      name: 'baseZindex',
      type: 'Number',
      default: '0',
      description: 'Configures the base Z index of notification.',
    },
    {
      name: 'autoZindex',
      type: 'Boolean',
      default: 'true',
      description: 'Configures if the z indexing of notification will be auto or not.',
    },
    // {
    //   name: 'disabled',
    //   type: 'Boolean',
    //   default: 'false',
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'dense',
    //   type: 'Boolean',
    //   default: 'false',
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'label',
    //   type: 'String',
    //   default: '',
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'icon',
    //   type: 'String',
    //   default: '',
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'checked-icon',
    //   type: 'String',
    //   default: '',
    //   description: 'Input element with rounded corners',
    // },
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
export default NotificationAPI;
