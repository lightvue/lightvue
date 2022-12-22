const RatingAPI = {
  props: [
    {
      name: 'increment',
      type: 'Number',
      default: '1',
      description: 'Configures the increment of rating.',
    },
    {
      name: 'rating',
      type: 'Number',
      default: '0',
      description: 'Configures the default rating.',
    },
    {
      name: 'roundStartRating',
      type: 'Boolean',
      default: 'true',
      description: 'Configures if there is a default rating at the start.',
    },
    {
      name: 'activeColor',
      type: 'String',
      default: '#38b2ac',
      description: 'Configures the active color of rating.',
    },
    {
      name: 'inactiveColor',
      type: 'String',
      default: '#d8d8d8',
      description: 'Configures the inactive color of rating.',
    },
    {
      name: 'maxRating',
      type: 'Number',
      default: '0',
      description: 'Configures the max rating.',
    },
    {
      name: 'starPoints',
      type: 'Array',
      default: '[]',
      description: 'Configures the points given to individual star.',
    },
    {
      name: 'starSize',
      type: 'Number',
      default: '50',
      description: 'Configures the size of the rating star',
    },
    {
      name: 'showRating',
      type: 'Boolean',
      default: 'true',
      description: 'Configures if the rating is shown to the user.',
    },
    {
      name: 'readOnly',
      type: 'Boolean',
      default: 'false',
      description: 'Configures if the rating is read only.',
    },
    {
      name: 'textClass',
      type: 'String',
      default: '',
      description: 'Configures the text class of rating.',
    },
    {
      name: 'inline',
      type: 'Boolean',
      default: 'false',
      description: 'Configures if the rating is inline or not.',
    },
    {
      name: 'borderWidth',
      type: 'String',
      default: '0',
      description: 'Configures the width of rating border.',
    },
    {
      name: 'roundedCorners',
      type: 'Boolean',
      default: 'false',
      description: 'Configures if the rating border is rounded or not.',
    },
    {
      name: 'padding',
      type: 'Number',
      default: '0',
      description: 'Configures the padding of rating.',
    },
    {
      name: 'fixedPoints',
      type: 'Number',
      default: '0',
      description: 'Configures the fixed points of rating.',
    },
    {
      name: 'glow',
      type: 'Number',
      default: '0',
      description: 'Configures the glow intensity of the rating component.',
    },
    {
      name: 'glowColor',
      type: 'String',
      default: '#39b1ac',
      description: 'Configures the glow color of rating.',
    },
    {
      name: 'clearable',
      type: 'Boolean',
      default: 'false',
      description: 'Configures if the rating is clearable or not.',
    },
  ],
  events: [
    {
      name: 'input-native',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'input',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'update:modelValue',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'change',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'click',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'focus',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
    {
      name: 'blur',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Value of the input field, at any time.',
        },
      ],
      description: 'Input element with rounded corners',
    },
  ],
};
export default RatingAPI;
