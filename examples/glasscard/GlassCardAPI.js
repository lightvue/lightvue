const GalssCardAPI = {
    props:[
        {
            name: 'backgroundBlur',
            type: 'String',
            default: '15px',
            description: 'Specify the value for background-blur filter of the card.',
        },
        {
            name: 'backgroundOpacity',
            type: 'String',
            default: '70',
            description: "Specify the value for background's opacity, in %, ranging from 0 to 100.",
        },
        {
            name: 'backgroundColor',
            type: 'String',
            default: '#ffffff',
            description: 'Specify the background color of the card in 6-digit hex format.',
        },
        {
            name: 'padding',
            type: 'String',
            default: '20px',
            description: 'Specify the padding of the card.',
        },
        {
            name: 'borderRadius',
            type: 'String',
            default: '4px',
            description: 'Specify the border radius of the card.',
        },
        {
            name: 'showBorder',
            type: 'Boolean',
            default: 'false',
            description: 'Choose whether to show or hide the border.',
        },
        
    ],
    
}
export default GalssCardAPI;
