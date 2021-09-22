export default {
  props: [
    {
      name: 'showFlag',
      type: 'Boolean',
      default: 'true',
      description: "Displays country's flag in dropdown",
    },
    {
      name: 'showCountryName',
      type: 'Boolean',
      default: 'false',
      description: "Displays country's name in dropdown",
    },
  ],
};
