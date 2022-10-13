const CheckboxGroupAPI = {
  props: [
    {
      name: 'options',
      type: 'Array',
      default: '',
      description: 'Specifies the options in the checkbox group',
    },
    {
      name: 'optionLabel',
      type: 'String',
      default: '',
      description: 'Specifies the options label in the checkbox group',
    },
    {
      name: 'optionsValue',
      type: 'String',
      default: '',
      description: 'Specifies the options value of the checkbox group',
    },
    {
      name: 'name',
      type: 'String',
      default: '',
      description: 'Configures the name of the checkbox group option',
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
export default CheckboxGroupAPI;
