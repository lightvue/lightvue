const NumberAPI = {
  props: [
    {
      name: 'value',
      type: 'String',
      default: '',
      description: 'Configures the value of the number.',
    },
    {
      name: 'controls',
      type: 'Boolean',
      default: '',
      description: 'Allows user to configure with the control of number component if the value is true.',
    },
    {
      name: 'iconRight',
      type: 'String',
      default: 'light-icon-plus',
      description: 'Configures the icon on the right.',
    },
    {
      name: 'iconLeft',
      type: 'String',
      default: 'light-icon-minus',
      description: 'Configures the icon on the left.',
    },
    {
      name: 'buttonColor',
      type: 'String',
      default: 'lv--secondary',
      description: 'Configures the color of the button.',
    },
    {
      name: 'max',
      type: 'Number',
      default: '100',
      description: 'Configures the max value of the number component.',
    },
    {
      name: 'min',
      type: 'Number',
      default: '0',
      description: 'Configures the min value of the number component.',
    },
    {
      name: 'step',
      type: 'Number',
      default: '0',
      description: 'Defines the step to go up or down in the number component.',
    },
    {
      name: 'variant',
      type: 'String',
      default : 'primary',
      description: 'Allows user to change color of the button.'
    }
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
    {
      name: 'input',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'update:modelValue',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'change',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'click',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'focus',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'blur',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
  ],
};
export default NumberAPI;
