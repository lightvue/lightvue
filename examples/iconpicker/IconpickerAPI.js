const IconpickerAPI = {
  props: [
    {
      name: 'label',
      type: 'String',
      default: '',
      description: 'Defines the Label of the Icon Picker Element',
    },
    {
      name: 'hidePalette',
      type: 'Boolean',
      default: 'false',
      description: 'Toggles the icon palette',
    },
    {
      name: 'icons',
      type: 'Array',
      default: "['light-icon-brand-twitter', 'light-icon-brand-linkedin', 'light-icon-brand-facebook', 'light-icon-brand-instagram', 'light-icon-brand-telegram', 'light-icon-brand-github', 'light-icon-brand-whatsapp', 'light-icon-brand-youtube', 'light-icon-settings', 'light-icon-download', 'light-icon-bell', 'light-icon-book', 'light-icon-copy', 'light-icon-code']",
      description: 'Array of 14 icons for the icon palette',
    },
    {
      name: 'withoutInput',
      type: 'Boolean',
      default: 'false',
      description: 'Displays icon picker without input',
    },
  ],
};
export default IconpickerAPI;
