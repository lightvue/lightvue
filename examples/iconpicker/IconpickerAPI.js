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
      default: "['light-icon-accessible', 'light-icon-ad', 'light-icon-activity', 'light-icon-ban', 'light-icon-bandage', 'light-icon-basket', 'light-icon-bike', 'light-icon-bell', 'light-icon-bed', 'light-icon-bolt', 'light-icon-book', 'light-icon-bold', 'light-icon-cloud', 'light-icon-code', 'light-icon-clock', 'light-icon-copy']",
      description: 'Array of 16 icons for the icon palette',
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
