const TextareaAPI = {
  props: [
    {
      name: 'value',
      type: 'String',
      default: '',
      description: 'Configures the default value of the textarea.',
    },
    {
      name: 'maxLength',
      type: 'Number',
      default: '',
      description: 'Configures the max number of characters that can be inserted in the textarea.',
    },
    {
      name: 'showLimit',
      type: 'Boolean',
      default: 'false',
      description: 'Configures if the max limit would be shown or not.',
    },
    {
      name: 'autoResize',
      type: 'Boolean',
      default: 'false',
      description: 'Configures if the textarea should auto resize itself or not.',
    },
    {
      name: 'resize',
      type: 'String',
      default: 'none',
      description: 'Configures the resize value of textarea.',
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
export default TextareaAPI;
