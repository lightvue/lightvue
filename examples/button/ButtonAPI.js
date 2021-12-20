const ButtonAPI = {
  props: [
    {
      name: 'icon',
      type: 'String',
      default: '',
      description: 'Allows user to show an icon on the button.',
    },
    {
      name: 'iconRight',
      type: 'String',
      default: '',
      description: 'Allows users to have an icon on right.',
    },
    {
      name: 'label',
      type: 'String',
      default: '',
      description: 'Allows user to change the label on the button.',
    },
    {
      name: 'outlined',
      type: 'Boolean',
      default: 'false',
      description: 'Allows the user to display button in a loading mode with the help of dots or spinner.',
    },
    {
      name: 'push',
      type: 'Boolean',
      default: 'false',
      description: 'Allows the user to have push functionality on the button.',
    },
    {
      name: 'raised',
      type: 'Boolean',
      default: 'false',
      description: 'Allows the user to have raised functionality on the button.',
    },
    {
      name: 'deepShadow',
      type: 'Boolean',
      default: 'false',
      description: 'Allows the user to have deep shadow on the button.',
    },
    {
      name: 'deepShadowHover',
      type: 'Boolean',
      default: 'false',
      description: 'Allows the user to have deep shadow on hovering on the button.',
    },
    {
      name: 'size',
      type: 'String',
      default: 'md',
      description: 'Allows user to configuer the size of the button.',
    },
    // {
    //   name: 'ripple',
    //   type: 'Boolean',
    //   default: 'false',
    //   description: 'Adds a ripple affect to the button',
    // },
    {
      name: 'rounded',
      type: 'Boolean',
      default: 'false',
      description: 'Adds the border radius add make the button look round.',
    },
    {
      name: 'type',
      type: 'String',
      default: 'button',
      description: 'Configures the type of the button.',
    },
    {
      name: 'variant',
      type: 'String',
      default : 'primary',
      description: 'Allows user to change color of the button.'
    }
  ],
  events: [
    {
      name: 'update:modelValue',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Update the value of toggle in real time in the web app.',
        },
      ],
      description: 'Can also be achieved by v-model',
    },
    {
      name: 'change',
      params: [
        {
          name: 'value',
          type: 'boolean',
          description: 'Toggles between ',
        },
      ],
      description: 'Changes the value of toggle switch',
    },
    {
      name: 'click',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Decides what happenes when we click on the toggle switch',
        },
      ],
      description: 'Toggle switch changer on click.',
    },
    {
      name: 'focus',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Decides the functionality of focus on the toggle switch.',
        },
      ],
      description: 'Decides what happens when toggle switch is in focus.',
    },
    {
      name: 'blur',
      params: [
        {
          name: 'value',
          type: 'String',
          description: 'Works opposite to focus event.',
        },
      ],
      description: 'Decide the functionality of toggle switch when it is blur.',
    },
  ],
};
export default ButtonAPI;
