const ProgressBarAPI = {
  props: [
    {
      name: 'color',
      type: 'String',
      default: '#607c8a',
      description: 'Color of the loader',
    },
    {
      name: 'scale',
      type: 'Number/String',
      default: '1',
      description: 'Size of the loader, relative to the default size.',
    },
  ],
};
export default LoadersAPI;
