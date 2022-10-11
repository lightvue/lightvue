const ToggleSwitchAPI = {
  props: [
    {
      name: 'name',
      type: 'String',
      default: '',
      description: 'Specifies the name of the control',
    },
    {
      name: 'icon',
      type: 'String',
      default: '',
      description: 'Determines the icon to be used',
    },
    {
      name: 'checked-icon',
      type: 'String',
      default: '',
      description: 'The icon which should be used when the toggle is on.',
    },
    {
      name: 'unchecked-icon',
      type: 'String',
      default: '',
      description: 'The icon which should be used when the toggle is off.',
    },
    {
      name: 'left-label',
      type: 'Boolean',
      default: 'false',
      description: 'Label to be displayed on the left side of the component',
    },
    {
      name: 'label',
      type: 'String',
      default: '',
      description: 'Label to be displayed with the toggle switch (on the right side)',
    },
    {
      name: 'labelPosition',
      type: 'String',
      default: 'right',
      description: 'Choose whether to place label on the left or right of the switch',
    },
    {
      name: 'disabled',
      type: 'Boolean',
      default: 'false',
      description: 'Disables the toggle switch component',
    },
    {
      name: 'size',
      type: 'String',
      default: '16px',
      description: 'Defines the size of toggle switch component',
    },
    {
      name: 'color',
      type: 'String',
      default: '',
      description: 'Defines the color of toggle switch component.',
    },
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
export default ToggleSwitchAPI;
