const ShimmersAPI = {
  props: [
    {
      name: 'width',
      type: 'Number',
      default: '',
      description: 'Defines width of the Skeleton.',
    },
    {
      name: 'height',
      type: 'Number',
      default: '',
      description: 'Defines height of the Skeleton.',
    },
    {
      name: 'viewBox',
      type: 'String',
      default: '',
      description: 'Defines the position and dimension, in user space, of an SVG viewport. ',
    },
    {
      name: 'preserveAspectRatio',
      type: 'String',
      default: '',
      description: 'maintains the aspect ratio.',
    },
    {
      name: 'speed',
      type: 'Number',
      default: '2',
      description: 'Defines speed of the animation.',
    },
    {
      name: 'baseUrl',
      type: 'String',
      default: '',
      description: '',
    },
    {
      name: 'primaryColor',
      type: 'String',
      default: '#f9f9f9',
      description: 'Defines the primary Color of the Skeleton.',
    },
    {
      name: 'secondaryColor',
      type: 'String',
      default: '#ecebeb',
      description: 'Defines the secondary Color of the Skeleton.',
    },
    {
      name: 'primaryOpacity',
      type: 'Number',
      default: '1',
      description: 'Defines opacity of the primary color',
    },
    {
      name: 'secondaryOpacity',
      type: 'Number',
      default: '1',
      description: 'Defines opacity of the secondary color',
    },
    {
      name: 'uniqueKey',
      type: 'String',
      default: '',
      description: 'Defines unique key of the skeleton',
    },
    {
      name: 'animate',
      type: 'Boolean',
      default: '',
      description: 'Allows to animate the Skeleton',
    },
  ],
};
export default ShimmersAPI;
