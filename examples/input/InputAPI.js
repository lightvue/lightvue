const InputAPI = {
  props: [
    {
      name: 'bottom-bar',
      type: 'Boolean',
      default: 'false',
      description: 'A bottom bar will be added to the default input element',
    },
    {
      name: 'floating-label',
      type: 'Boolean',
      default: 'false',
      description: 'Input element with a floating label on the top',
    },
    {
      name: 'help-text',
      type: 'String',
      default: '',
      description: 'Some help text with the input element to give some info to the user',
    },
    {
      name: 'icon-left',
      type: 'String',
      default: '',
      description: `Input element with an icon on it's left`,
    },
    {
      name: 'icon-right',
      type: 'String',
      default: '',
      description: `Input element with an icon on it's right`,
    },
    {
      name: 'label',
      type: 'String',
      default: '',
      description: 'Label describing the input element',
    },
    {
      name: 'placeholder',
      type: 'String',
      default: '',
      description: 'Input element with placeholder',
    },
    {
      name: 'placeholder-color',
      type: 'String',
      default: 'rgba(0, 0, 0, 0.3)',
      description: 'Input element with custom placeholder-color',
    },
    {
      name: 'value',
      type: 'String',
      default: 'null',
      description: 'Input element with default set value by the user',
    },
    {
      name: 'rounded',
      type: 'Boolean',
      default: 'false',
      description: 'Input element with rounded corners',
    },
  ],
  slots: [
    {
      name: 'append',
      description: 'Adds an icon/label to the left of the input field',
    },
    {
      name: 'prepend',
      description: 'Adds an icon/label to the right of the input field',
    },
  ],

  events: [
    {
      name: 'input',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input box value',
    },
    {
      name: 'update:modelValue',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Updates the value of input feild in the app in real time.',
        },
      ],
      description: 'Updates input value',
    },
    {
      name: 'input-native',
      params: [
        {
          name: 'event',
          type: 'Object',
          description: 'Native JS function of input',
        },
      ],
      description: 'Javascript input native function',
    },
  ],
};
export default InputAPI;
