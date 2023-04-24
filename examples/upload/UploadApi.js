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
      description: 'Native Multiple files upload.',
    },
    {
      name: 'extensions',
      type: 'String',
      default: '',
      description: 'Native extensions restrict the file extension.',
    },
    {
      name: 'maxFileSize',
      type: 'Number',
      default: '1024',
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
      description: 'The light icon Class',
    },
    {
      name: 'ButtonClass',
      type: 'String',
      default: 'lv--success',
      description: 'The Lvbutton class',
    },
    {
      name: 'label',
      type: 'String',
      default: 'Choose files & Choose a file',
      description: 'The lable for buttons and Placeholder for input Field',
    },
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
  events: [
    {
      name: 'submit-image',
      params: [
        {
          name: 'files',
          type: 'Object',
          description: 'onChange native event',
        },
      ],

      description: 'File that catch through onChange native event',
    },
    {
      name: 'extension-error',
      params: [
        {
          name: 'files',
          type: 'Object',
          description: 'File that catch through onChange native event',
        },
      ],

      description: 'If File Extension does not match with provided value',
    },
    {
      name: 'file-size-error',
      params: [
        {
          name: 'imageSize',
          type: 'Number',
          description: 'Uploaded File Size',
        },
      ],

      description: 'If Uploaded file size exceeds maxFileSize',
    },
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
    // },
  ],
};
export default UploadAPI;
