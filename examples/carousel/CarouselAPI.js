const CarouselAPI = {
  props: [
    {
      name: 'autoplay',
      type: 'Boolean',
      default: 'true',
      description: 'Configures the autoplay feature.',
    },
    {
      name: 'interval',
      type: 'Number',
      default: '5000',
      description: 'Configures the Duration for autoplay.',
    },
    // {
    //   name: 'orientation',
    //   type: 'String',
    //   default: 'vertical',
    //   description: 'Configures the direction of transition.',
    // },
    // {
    //   name: 'duration',
    //   type: 'Number',
    //   default: '350',
    //   description: 'Configures the duration of transition.',
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
  // ],
};
export default CarouselAPI;
