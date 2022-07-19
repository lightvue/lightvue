const PopOverAPI = {
    props: [{
            name: 'backgroundColor',
            type: 'String',
            default: '#fff',
            description: 'Configures The color of a Popover.',
        },
        {
            name: 'borderRadius',
            type: 'String',
            default: '4px',
            description: 'Configures The border radius of a Popover.',
        },
        {
            name: 'padding',
            type: 'String',
            default: '16px',
            description: 'Configures The padding of a Popover.',
        },
        {
            name: 'Placement',
            type: 'String',
            default: 'top',
            description: 'Configures The position of a popover.',
        },
        {
            name: 'hover',
            type: 'Boolean',
            default: 'false',
            description: 'Show the popover on Hover',
        },
        {
            name: 'offset',
            type: 'Number',
            default: '15',
            description: 'Configures the offset of a Popover.',
        },
        {
            name: 'width',
            type: 'String',
            default: '200px',
            description: 'Configures the Width of a Popover.',
        },
        {
            name: 'height',
            type: 'String',
            default: '70vh',
            description: 'Configures The height of a Popover.',
        },
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
export default PopOverAPI;