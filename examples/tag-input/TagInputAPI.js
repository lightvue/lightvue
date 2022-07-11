const TagInputAPI = {
  props: [
    {
        name: 'dataType',
        type: 'String',
        default: 'string',
        description: 'Allows user to select dataType.',
      },
      {
        name: 'value',
        type: 'String',
        default: '',
        description: 'Value',
      },
      {
        name: 'limit',
        type: 'Number',
        default: '-1',
        description: 'Allows user to set limit of tag inputs.',
      },
      {
        name: 'rounded',
        type: 'Boolean',
        default: 'false',
        description: 'Allows the user to display button in a rounded shape.',
      },
      {
        name: 'tagColor',
        type: 'string',
        default: '',
        description: 'Allows the user to change tagColor. ',
      },
      {
        name: 'tagTextColor',
        type: 'string',
        default: '',
        description: 'Allows the user to change tagTextColor. ',
      },
      
    ],
    
  };
  export default TagInputAPI;
  