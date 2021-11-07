const UploadAPI = {
  props: [
    {
      name: 'drop',
      type: 'Boolean',
      default: 'false',
      description: 'drag and drop files.',
    },
    {
      name: 'multiple',
      type: 'Boolean',
      default: 'false',
      description: 'Multiple files upload.',
    },
    {
      name: 'acceptExtensions',
      type: 'String',
      default: '',
      description: 'Restrict the file extension.',
    },
    {
      name: 'maxFileSize',
      type: 'Number',
      default: 'NaN',
      description: 'Restrict the fileSize.',
    },
    {
      name: 'height',
      type: 'String',
      default: '2rem',
      description: 'Height of a container.',
    },
    {
      name: 'width',
      type: 'String',
      default: '2rem',
      description: 'width of a container.',
    },
    {
      name: 'Rounded',
      type: 'Boolean',
      default: 'false',
      description: 'Rounded Corners.',
    },
    {
      name: 'withButtonInput',
      type: 'Boolean',
      default: 'false',
      description: 'The Lvupload with icon button and the text field for display name of the uploaded file ',
    },
    {
      name: 'icon',
      type: 'String',
      default: 'light-icon-cloud-upload',
      description: 'The light icon button ',
    },
    {
      name: 'ButtonClass',
      type: 'String',
      default: 'lv--success',
      description: 'The Lvbutton class',
    },
    // {
    //   name: 'dimension',
    //   type: 'String',
    //   default: 'height',
    //   description: 'Configures the direction of transition.',
    // },
    // {
    //   name: 'duration',
    //   type: 'Number',
    //   default: '300',
    //   description: 'Configures the duration of transition.',
    // },
    // {
    //   name: 'easing',
    //   type: 'String',
    //   default: 'ease-in-out',
    //   description: 'Configures if the easing property.',
    // },
    // {
    //   name: 'disabled',
    //   type: 'Boolean',
    //   default: 'false',
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'dense',
    //   type: 'Boolean',
    //   default: 'false',
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'label',
    //   type: 'String',
    //   default: '',
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'icon',
    //   type: 'String',
    //   default: '',
    //   description: 'Input element with rounded corners',
    // },
    // {
    //   name: 'checked-icon',
    //   type: 'String',
    //   default: '',
    //   description: 'Input element with rounded corners',
    // },
  ],
  // events: [
  //   {
  //     name: 'input-native',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'input',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'update:modelValue',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'change',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'click',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'focus',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  //   {
  //     name: 'blur',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Value of the input field, at any time.',
  //       },
  //     ],
  //     description: 'Input element with rounded corners',
  //   },
  // ],
};
export default UploadAPI;
