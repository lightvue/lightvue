const ProgressSpinnerAPI = {
    props:[
        {
            name: 'size',
            type: 'String',
            default: '75px',
            description: 'Specify size of the spinner.',
        },
        {
            name: 'color',
            type: 'String',
            default: '#607c8a',
            description: 'Specify color of the spinner.',
        },
        {
            name: 'strokeWidth',
            type: 'String',
            default: '2',
            description: 'Specify stroke-width (thickness) of the spinner.',
        },
        {
            name: 'animationDuration',
            type: 'String',
            default: '2s',
            description: 'Specify animation-duration of the spinner.',
        },
    ],
}
export default ProgressSpinnerAPI;
