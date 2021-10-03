const BreadCrumbAPI = {
  props: [
    {
      name: 'items',
      type: 'Array',
      default: '',
      description: 'Configures the item in Breadcrumb.',
    },
    {
      name: 'linkColor',
      type: 'String',
      default: '#6d6d79',
      description: 'Configures the color of links in Breadcrumb',
    },
    {
      name: 'disabledLinkColor',
      type: 'String',
      default: '#aaaaaa',
      description: 'Configures the color of disabled link in Breadcrumb',
    },
    {
      name: 'slotColor',
      type: 'String',
      default: '#607c8a',
      description: 'Configures the color of Slot in Breadcrumb.',
    },
    {
      name: 'fontSize',
      type: 'String',
      default: '16',
      description: 'Configures the font size of Breadcrumb Links.',
    },
  ],
};
export default BreadCrumbAPI;
