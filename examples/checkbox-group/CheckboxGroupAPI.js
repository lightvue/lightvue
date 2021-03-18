const CheckBoxGroup = {
  props: [
    {
      name: 'name',
      type: 'String',
      default: '',
      description: 'Specifies name of the control, and is useful when dealing with forms submitted directly to a URL',
    },
    {
      name: 'toggle-order',
      type: 'Boolean',
      default: 'false',
      description: 'Specifies toggle order of the checkbox',
    },
    {
      name: 'label',
      type: 'String',
      default: '',
      description: 'Configures the label of the checkbox',
    },
    {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      description: 'Disables the checkbox if this prop is passed',
    },
    {
      name: 'left-labeled',
      type: 'Boolean',
      default: 'false',
      description: 'Shifts the label to left',
    },
    {
      name: 'size',
      type: 'String',
      default: '16px',
      description: 'Defines the size of the checkbox',
    },
    {
      name: 'icon',
      type: 'String',
      default: '',
      description: 'Defines the icon to be used for the checkbox',
    },
    {
      name: 'color',
      type: 'String',
      default: '',
      description: 'Defines color of the string in the checkbox',
    },
  ],
  slots: [
    {
      name: 'default',
      description: 'This default slot can be used as icon/label for the checkbox',
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
