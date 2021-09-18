const CollapsibleAPI = {
  props: [
    {
      name: 'name',
      type: 'String',
      default: 'collapsible',
      description: 'Configures the name of transition.',
    },
    {
      name: 'show',
      type: 'Boolean',
      default: true,
      description: 'Configures the visibility of the content, inside collapsible component.',
    },
    {
      name: 'orientation',
      type: 'String',
      default: 'vertical',
      description: 'Configures the direction of transition.',
    },
    {
      name: 'duration',
      type: 'Number',
      default: '350',
      description: 'Configures the duration of transition.',
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
  // ],
};
export default CollapsibleAPI;
