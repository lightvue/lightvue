export default {
  props: [
    {
      name: 'menu',
      type: 'Array',
      default: `['Bold', 'Italic', 'Strike', 'Heading 1', 'Heading 2', 'Align', 'Link', 'Code', 'List']`,
      description: 'Allows users to specify the features of the text editor',
    },
    {
      name: 'theme',
      type: 'String',
      default: '#38b2ac',
      description: 'Allows users to specify the theme of the text editor',
    },
    {
      name: 'color',
      type: 'String',
      default: '#ffffff',
      description: 'Allows users to specify the color of the icon stroke',
    },
  ],
};
