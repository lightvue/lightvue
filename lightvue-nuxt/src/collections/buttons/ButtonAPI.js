const ButtonAPI = {
    props:[
        {
            name: 'label',
            type: 'String | Number',
            default: '',
            description: 'Allows user to show the text on the button',
        },
        {
            name: 'icon',
            type: 'String',
            default: '',
            description: 'Allows user to show an icon on the button',
        },
        {
            name: 'no-caps',
            type: 'Boolean',
            default: 'false',
            description: 'Avoids the label text from being in uppercase',
        },
        {
            name: 'no-wrap',
            type: 'Boolean',
            default: 'false',
            description: 'Avoids wrapping of the text',
        },
        {
            name: 'loading',
            type: 'Boolean',
            default: 'false',
            description: 'Allows the user to display button in a loading mode with the help of dots or spinner',
        },
        {
            name: 'disable',
            type: 'Boolean',
            default: 'false',
            description: 'Disables the button',
        },
        {
            name: 'size',
            type: 'String',
            default: '16px',
            description: 'Allows user to configuer the size of the button',
        },
        {
            name: 'ripple',
            type: 'Boolean',
            default: 'false',
            description: 'Adds a ripple affect to the button',
        },
        {
            name: 'ripple',
            type: 'Boolean',
            default: 'false',
            description: 'Adds a ripple affect to the button',
        },
        {
            name: 'outline',
            type: 'Boolean | Object',
            default: 'false',
            description: 'Allows user to add and configure the outline of the button',
        },
        {
            name: 'rounded',
            type: 'Boolean',
            default: 'false',
            description: 'Adds the border radius add make the button look round',
        },
        {
            name: 'push',
            type: 'Boolean',
            default: 'false',
            description: 'Adds the push effect to the button',
        },
        {
            name: 'padding',
            type: 'String',
            default: '',
            description: 'Adds padding to the button element',
        },
        {
            name: 'color',
            type: 'String',
            default: '',
            description: 'Allows user to configure color of the button',
        },
        {
            name: 'text-color',
            type: 'String',
            default: '',
            description: 'Allows user to configure text-color of the button',
        },
    ],
    events: [
        {
            name: 'update:modelValue',
            params: [
                {
                    name: 'value',
                    type: 'String',
                    description: 'Update the value of toggle in real time in the web app.'
                }
            ],
            description: 'Can also be achieved by v-model',
        },
        {
            name: 'change',
            params: [
                {
                    name: 'value',
                    type: 'boolean',
                    description: 'Toggles between '
                }
            ],
            description: 'Changes the value of toggle switch',
        },
        {
            name: 'click',
            params: [
                {
                    name: 'value',
                    type: 'String',
                    description: 'Decides what happenes when we click on the toggle switch'
                }
            ],
            description: 'Toggle switch changer on click.',
        },
        {
            name: 'focus',
            params: [
                {
                    name: 'value',
                    type: 'String',
                    description: 'Decides the functionality of focus on the toggle switch.'
                }
            ],
            description: 'Decides what happens when toggle switch is in focus.',
        },
        {
            name: 'blur',
            params: [
                {
                    name: 'value',
                    type: 'String',
                    description: 'Works opposite to focus event.'
                }
            ],
            description: 'Decide the functionality of toggle switch when it is blur.',
        },
    ],
}
export default ButtonAPI;
