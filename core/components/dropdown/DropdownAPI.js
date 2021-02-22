const DropdownAPI = {
  props: [
    {
      name: 'value',
      type: 'string',
      default: '',
      description: 'Defines the value to be displayed on Dropdown component.',
    },
    {
      name: 'optionsLabel',
      type: 'String',
      default: '',
      description: 'Used to define the label of the options.',
    },
    {
      name: 'optionsValue',
      type: 'String',
      default: '',
      description: 'Used to define the value of the options.',
    },
    {
      name: 'scrollHeight',
      type: 'String',
      default: '200px',
      description: 'Defines the height of the scrollbar.',
    },
    {
      name: 'filter',
      type: 'Boolean',
      default: 'false',
      description: 'Allows to configure the filter option in dropdown.',
    },
    {
      name: 'filterPlaceholder',
      type: 'String',
      default: '',
      description: 'Allows to configure the filter placeholder in dropdown.',
    },
    {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      description: 'Disables the dropdown if value is set to true.',
    },
    {
      name: 'clearable',
      type: 'Boolean',
      default: 'false',
      description: 'Makes the value editable in the dropdown if the value is set to true.',
    },
    {
      name: 'iconRight',
      type: 'String',
      default: '',
      description: 'Adds an icon to the right.',
    },
    {
      name: 'emptyFilterMessage',
      type: 'String',
      default: 'No results found',
      description: 'Configures the empty filter message to be shown.',
    },
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
export default DropdownAPI;
