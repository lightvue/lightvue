const ColorpickerAPI = {
  props: [
    {
      name: 'label',
      type: 'String',
      default: '',
      description: 'Defines the Label of the Color Picker Element',
    },
    {
      name: 'hidePalette',
      type: 'Boolean',
      default: 'false',
      description: 'Toggles the color palette',
    },
    {
      name: 'colors',
      type: 'Array',
      default: "['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#795548']",
      description: 'Array of 16 colors for the color palette',
    },
    {
      name: 'withoutInput',
      type: 'Boolean',
      default: 'false',
      description: 'Displays color picker without input',
    },
    {
      name: 'eyeDropper',
      type: 'Boolean',
      default: 'true',
      description: 'It can be opened and used by the user to select colors from the screen.',
    },
    //     {
    //         name: 'inputId',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'name',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'disabled',
    //         type: 'Boolean',
    //         default: 'false',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'dense',
    //         type: 'Boolean',
    //         default: 'false',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'label',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'icon',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'checked-icon',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    // ],
    //   methods: [
    //     {
    //       name: 'input-native',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'input',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'update:modelValue',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'change',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'click',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'focus',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'blur',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
  ],
};
export default ColorpickerAPI;
