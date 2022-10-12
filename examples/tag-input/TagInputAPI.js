const TagInputAPI = {
  props: [
    {
      name: 'tagColor',
      type: 'String',
      default: '#38b2ac',
      description: 'Configures the tag background color',
    },
    {
      name: 'tagTextColor',
      type: 'String',
      default: '#ffffff',
      description: 'Configures the tag text color',
    },
    {
      name: 'rounded',
      type: 'Boolean',
      default: 'false',
      description: 'Configures whether tags should be rounded or not',
    },
    {
      name: 'limit',
      type: 'Number',
      default: '-1',
      description: 'Configures the maximum number of tags that be entered.',
    },
    // {
    //   name: 'dataType',
    //   type: 'String',
    //   default: 'string',
    //   description: 'Configures the datatype of.',
    // },
    // {
    //   name: 'showValue',
    //   type: 'Boolean',
    //   default: 'false',
    //   description: 'Configures if the value Tooltip is disabled or not.',
    // },
    // {
    //   name: 'sliderColor',
    //   type: 'String',
    //   default: '#607c8a',
    //   description: 'Configures the slider color.',
    // },
    // {
    //   name: 'trackColor',
    //   type: 'String',
    //   default: '#e2e2e2',
    //   description: 'Configures the track color.',
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
export default TagInputAPI;
