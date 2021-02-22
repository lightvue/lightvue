const CardAPI = {
    props:[
        {
            name: 'shadowStyle',
            type: 'Number',
            default: '1',
            description: 'Choose from a set of predefined shadow styles, ranging from 0 to 5.',
        },
        {
            name: 'borderRadius',
            type: 'String',
            default: '4px',
            description: 'Specify the border radius of the card.',
        },
        {
            name: 'backgroundColor',
            type: 'String',
            default: '#fff',
            description: 'Specify the background color of the card.',
        },
        {
            name: 'padding',
            type: 'String',
            default: '20px',
            description: 'Specify the padding of the card.',
        },
        {
            name: 'showBorder',
            type: 'Boolean',
            default: 'false',
            description: 'Choose whether to show or hide the border.',
        },
        
    ],
    
}
export default CardAPI;
