const CheckBoxGroup = {
  props: [
    {
      name: 'options',
      type: 'Array',
      default: '',
      description: 'Specifies the options in the checkbox',
    },
    {
      name: 'optionLabel',
      type: 'String',
      default: '',
      description: 'Specifies the options label in the checkbox',
    },
    {
      name: 'optionsValue',
      type: 'String',
      default: '',
      description: 'Specifies the options value of the checkbox',
    },
    {
      name: 'name',
      type: 'String',
      default: '',
      description: 'Configures the name of the checbox option',
    },
  ],

  events: [
    {
      name: 'input-function',
      params: [
        {
          name: 'value',
          type: 'Any',
          description: 'Value of new model',
        },
        {
          name: 'event',
          type: 'Object',
          description: 'JS event object',
        },
      ],
      description: 'Alterantive for v-model, can also be done with the help of v-model',
    },
  ],
};
export default CheckBoxGroup;
