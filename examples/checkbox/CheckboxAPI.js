const ToggleSwitchAPI = {
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
      description: 'Specifies the model value of the checkbox',
    },
    {
      name: 'trueValue',
      type: 'Array',
      default: '',
      description: 'Specifies the true value of the checkbox',
    },
    {
      name: 'falseValue',
      type: 'Array',
      default: '',
      description: 'Specifies the false value of the checkbox',
    },
    {
      name: 'checked',
      type: 'Array',
      default: '',
      description: 'Checks the checkbox by default',
    },
    {
      name: 'disabled',
      type: 'Array',
      default: '',
      description: 'Disables the checkbox',
    },
    {
      name: 'required',
      type: 'Array',
      default: '',
      description: 'Checkbox is required to be selected',
    },
    {
      name: 'intermediate',
      type: 'Array',
      default: '',
      description: 'Adds an intermediate value to the checkbox',
    },
    {
      name: 'color',
      type: 'String',
      default: '',
      description: 'Defines the color of the checkbox',
    },
    {
      name: 'offcolor',
      type: 'String',
      default: '',
      description: 'Defines the off color of the string in the checkbox',
    },
    {
      name: 'hovercolor',
      type: 'String',
      default: '',
      description: 'Defines the hover color of the checkbox',
    },
    {
      name: 'interminatecolor',
      type: 'String',
      default: '',
      description: 'Defines the interminate color of the checkbox',
    },
    {
      name: 'toggle',
      type: 'Array',
      default: '',
      description: 'Defines the toggle value of the checkbox',
    },
    {
      name: 'hover',
      type: 'Array',
      default: '',
      description: 'Defines the hover value of the checkbox',
    },
    {
      name: 'focus',
      type: 'Array',
      default: '',
      description: 'Defines the focus value of the checkbox',
    },
    {
      name: 'rounded',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the checkbox is rounded or not',
    },
    {
      name: 'thick',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the checkbox is thick or not',
    },
    {
      name: 'pulse',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the checkbox has pulse or not',
    },
    {
      name: 'outline',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the checkbox has outline or not',
    },
    {
      name: 'smooth',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the checkbox has smooth transition or not',
    },
    {
      name: 'plain',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the checkbox is plain or not',
    },
    {
      name: 'icon',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the checkbox has an icon or not',
    },
    {
      name: 'bigger',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the checkbox is bigger or not',
    },
    {
      name: 'locked',
      type: 'Boolean',
      default: 'False',
      description: 'Configures if the checkbox is locked or not',
    },
  ],
  slots: [
    {
      name: 'off-extra',
      description: 'An extra slot when checkbox is off',
    },
    {
      name: 'off-label',
      description: 'Label slot when checkbox is off',
    },
    {
      name: 'hover-extra',
      description: 'An extra slot when hovered over checkbox',
    },
    {
      name: 'hover-label',
      description: 'Label slot when checkbox is hovered',
    },
    {
      name: 'intermedinate-extra',
      description: 'An extra slot when checkbox is on intermedinate state',
    },
    {
      name: 'intermedinate-label',
      description: 'Label slot when checkbox is on intermedinate state',
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
export default ToggleSwitchAPI;
