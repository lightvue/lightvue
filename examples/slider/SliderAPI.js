const SliderAPI = {
  props: [
    {
      name: 'value',
      type: 'Number',
      default: '',
      description: 'Configures the value of slider.',
    },
    {
      name: 'min',
      type: 'Number',
      default: '0',
      description: 'Configures the min value of slider',
    },
    {
      name: 'max',
      type: 'Number',
      default: '100',
      description: 'Configures the max value of slider',
    },
    {
      name: 'step',
      type: 'Number',
      default: 'null',
      description: 'Configures the value to step and down while sliding.',
    },
    {
      name: 'showLabel',
      type: 'Boolean',
      default: 'false',
      description: 'Configures the label to be visible or not.',
    },
    {
      name: 'orientation',
      type: 'String',
      default: 'horizontal',
      description: 'Configures the orientation of the slider.',
    },
    {
      name: 'verticalHeight',
      type: 'String',
      default: '200',
      description: 'Configures the vertical height of the slider.',
    },
    {
      name: 'sliderColor',
      type: 'String',
      default: '#38b2ac',
      description: 'Configures the slider color.',
    },
    {
      name: 'trackColor',
      type: 'String',
      default: '#e2e2e2',
      description: 'Configures the track color.',
    },
    // {
    //   name: 'range',
    //   type: 'Boolean',
    //   default: 'false',
    //   description: 'Configures the range of the slider.',
    // },
    // {
    //   name: 'disabled',
    //   type: 'Boolean',
    //   default: 'false',
    //   description: 'Configures if the slider is disabled or not.',
    // },
    // {
    //   name: 'ariaLabelledBy',
    //   type: 'String',
    //   default: '',
    //   description: 'Configures the aria to be labelled on the slider.',
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
export default SliderAPI;
