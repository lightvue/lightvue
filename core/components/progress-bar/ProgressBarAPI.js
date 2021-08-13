const progressbarAPI = {
    props:[
        {
            name: 'value',
            type: 'Number',
            default: '0',
            description: 'Current progress in %, applicable only in determinate mode.',
        },
        {
            name: 'mode',
            type: 'String',
            default: 'determinate',
            description: 'Type of progress bar required, "determinate" or "indeterminate".',
        },
        {
            name: 'color',
            type: 'String',
            default: '#607c8a',
            description: 'Color of the progress bar.',
        },
        {
            name: 'showValue',
            type: 'Boolean',
            default: 'true',
            description: 'Choose if you want to show or hide the current % of progress',
        },
    ],
}
export default progressbarAPI;
