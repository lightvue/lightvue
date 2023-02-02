const NotificationAPI = {
    props: [{
            name: 'group',
            type: 'String',
            default: '',
            description: 'Configures the grouping of notification.',
        },
        {
            name: 'type',
            type: 'String',
            default: '',
            description: 'Configures the type of the notification. Examples are Success, Error, Warn, Info.',
        },
        {
            name: 'position',
            type: 'String',
            default: 'top-right',
            description: 'Configures the position of notification. Examples are top-right, top-left, bottom-right, bottom-left.',
        },
        {
            name: 'variant',
            type: 'String',
            default: 'light',
            description: 'Configures the variant type of the notification. Examples are light, fill, light-left-border, fill-left-border.',
        },
        {
            name: 'title',
            type: 'String',
            default: 'message',
            description: 'Configures the title of message of the notification.',
        },
        {
            name: 'content',
            type: 'String',
            default: 'content',
            description: 'Configures the content of message of the notification.',
        },
        {
            name: 'duration',
            type: 'String',
            default: '3000 ms',
            description: 'Configures the duration of the notification. ',
        },

        {
            name: 'baseZindex',
            type: 'Number',
            default: '0',
            description: 'Configures the base Z index of notification.',
        },
        {
            name: 'autoZindex',
            type: 'Boolean',
            default: 'true',
            description: 'Configures if the z indexing of notification will be auto or not.',
        },
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
export default NotificationAPI;