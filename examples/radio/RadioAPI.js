const RadioAPI = {
  props: [
    {
      name: 'name',
      type: 'String',
      default: '',
      description: 'Specifies name of the control, and is useful when dealing with forms submitted directly to a URL',
    },
    {
      name: 'modelValue',
      type: 'Array',
      default: '',
      description: 'Specifies the model value of the radio',
    },
    {
      name: 'trueValue',
      type: 'Array',
      default: '',
      description: 'Specifies the true value of the radio',
    },
    {
      name: 'falseValue',
      type: 'Array',
      default: '',
      description: 'Specifies the false value of the radio',
    },
    {
      name: 'checked',
      type: 'Array',
      default: '',
      description: 'Checks the radio by default',
    },
    {
      name: 'disabled',
      type: 'Array',
      default: '',
      description: 'Disables the radio',
    },
    {
      name: 'required',
      type: 'Array',
      default: '',
      description: 'Radio is required to be selected',
    },
    {
      name: 'intermediate',
      type: 'Array',
      default: '',
      description: 'Adds an intermediate value to the radio',
    },
    {
      name: 'color',
      type: 'String',
      default: '',
      description: 'Defines the color of the radio',
    },
    {
      name: 'offcolor',
      type: 'String',
      default: '',
      description: 'Defines the off color of the string in the radio',
    },
    {
      name: 'hovercolor',
      type: 'String',
      default: '',
      description: 'Defines the hover color of the radio',
    },
    {
      name: 'interminatecolor',
      type: 'String',
      default: '',
      description: 'Defines the interminate color of the radio',
    },
    {
      name: 'toggle',
      type: 'Array',
      default: '',
      description: 'Defines the toggle value of the radio',
    },
    {
      name: 'hover',
      type: 'Array',
      default: '',
      description: 'Defines the hover value of the radio',
    },
    {
      name: 'focus',
      type: 'Array',
      default: '',
      description: 'Defines the focus value of the radio',
    },
    {
      name: 'rounded',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the radio is rounded or not',
    },
    {
      name: 'thick',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the radio is thick or not',
    },
    {
      name: 'pulse',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the radio has pulse or not',
    },
    {
      name: 'outline',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the radio has outline or not',
    },
    {
      name: 'smooth',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the radio has smooth transition or not',
    },
    {
      name: 'plain',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the radio is plain or not',
    },
    {
      name: 'icon',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the radio has an icon or not',
    },
    {
      name: 'bigger',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the radio is bigger or not',
    },
    {
      name: 'locked',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the radio is locked or not',
    },
  ],
  slots: [
    {
      name: 'off-extra',
      description: 'An extra slot when radio is off',
    },
    {
      name: 'off-label',
      description: 'Label slot when radio is off',
    },
    {
      name: 'hover-extra',
      description: 'An extra slot when hovered over radio',
    },
    {
      name: 'hover-label',
      description: 'Label slot when radio is hovered',
    },
    {
      name: 'intermediate-extra',
      description: 'An extra slot when radio is on intermediate state',
    },
    {
      name: 'intermediate-label',
      description: 'Label slot when radio is on intermediate state',
    },
  ],

  //   events: [
  //     {
  //       name: 'input-function',
  //       params: [
  //         {
  //           name: 'value',
  //           type: 'Any',
  //           description: 'Value of new model',
  //         },
  //         {
  //           name: 'event',
  //           type: 'Object',
  //           description: 'JS event object',
  //         },
  //       ],
  //       description: 'Alterantive for v-model, can also be done with the help of v-model',
  //     },
  //   ],
};
export default RadioAPI;
