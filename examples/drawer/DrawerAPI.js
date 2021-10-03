const DrawerAPI = {
  props: [
    {
      name: 'top',
      type: 'Boolean',
      default: 'false',
      description: 'Defines the orientation of drawer.',
    },
    {
      name: 'right',
      type: 'Boolean',
      default: 'false',
      description: 'Defines the orientation of drawer.',
    },
    {
      name: 'bottom',
      type: 'Boolean',
      default: 'false',
      description: 'Defines the orientation of drawer.',
    },
    {
      name: 'left',
      type: 'Boolean',
      default: 'true',
      description: 'Defines the orientation of drawer.',
    },
    {
      name: 'close',
      type: 'Boolean',
      default: '',
      description: 'Defines the orientation of drawer.',
    },
    {
      name: 'shadow',
      type: 'Boolean',
      default: '',
      description: 'Defines the orientation of drawer.',
    },
    {
      name: 'backdropBlur',
      type: 'Boolean',
      default: '',
      description: 'Defines the orientation of drawer.',
    },
    {
      name: 'customStyle',
      type: 'Object',
      default: '',
      description: 'Defines the orientation of drawer.',
    },
    {
      name: 'headerTitle',
      type: 'String',
      default: '',
      description: 'Defines the heading of the LvDrawer.',
    },
    {
      name: 'backdropOpacity',
      type: 'String',
      default: '0.3',
      description: 'Defines the opacity of backdrop.',
    },
    {
      name: 'absolute',
      type: 'Boolean',
      default: 'false',
      description: 'Defines whether the position is absolute or not.',
    },
    {
      name: 'noBackdrop',
      type: 'Boolean',
      default: 'false',
      description: 'Defines whether the backdrop effect applied or not.',
    },
    {
      name: 'width',
      type: 'Number',
      default: '250',
      description: 'Defines the width of drawer.',
    },
    {
      name: 'height',
      type: 'Number',
      default: '250',
      description: 'Defines the height of drawer.',
    },
    {
      name: 'percentWidth',
      type: 'Number',
      default: '',
      description: 'Defines the width of drawer in percent.',
    },
    {
      name: 'percentHeight',
      type: 'Number',
      default: '',
      description: 'Defines the Height of drawer in percent.',
    },
    {
      name: 'zIndex',
      type: 'Number',
      default: '10',
      description: 'Defines the z-index of drawer.',
    },
    {
      name: 'maxSpan',
      type: 'Number',
      default: '70',
      description: 'Defines the max-span of drawer in percent.',
    },
    {
      name: 'background',
      type: 'String',
      default: '#ffffff',
      description: 'Defines the background color of drawer.',
    },
    {
      name: 'headerColor',
      type: 'String',
      default: '#000000',
      description: 'Defines the  color of heading.',
    },
    {
      name: 'headerBackground',
      type: 'String',
      default: '#fff',
      description: 'Defines the background color of header.',
    },
    {
      name: 'headerFontSize',
      type: 'String',
      default: '20px',
      description: 'Defines the  font-size of header.',
    },
    {
      name: 'padding',
      type: 'String',
      default: '0px',
      description: 'Defines the padding to drawer.',
    },
    {
      name: 'noBottom',
      type: 'Boolean',
      default: 'false',
      description: '',
    },
  ],
  // events: [
  //   {
  //     name: 'before-show',
  //     params: [
  //       {
  //         name: 'before-show',
  //         type: 'String',
  //         description: 'Configures what happens before dropdown is shown.',
  //       },
  //     ],
  //     description: 'Changes the events happening before the dropdown is shown.',
  //   },
  //   {
  //     name: 'before-hide',
  //     params: [
  //       {
  //         name: 'value',
  //         type: 'String',
  //         description: 'Configures what happens before dropdown is hidden.',
  //       },
  //     ],
  //     description: 'Changes the events happening before the dropdown is shown.',
  //   },
  // {
  //   name: 'update:modelValue',
  //   params: [
  //     {
  //       name: 'value',
  //       type: 'String',
  //       description: 'Value of the input field, at any time.',
  //     },
  //   ],
  //   description: 'Input element with rounded corners',
  // },
  // {
  //   name: 'change',
  //   params: [
  //     {
  //       name: 'value',
  //       type: 'String',
  //       description: 'Value of the input field, at any time.',
  //     },
  //   ],
  //   description: 'Input element with rounded corners',
  // },
  // {
  //   name: 'click',
  //   params: [
  //     {
  //       name: 'value',
  //       type: 'String',
  //       description: 'Value of the input field, at any time.',
  //     },
  //   ],
  //   description: 'Input element with rounded corners',
  // },
  // {
  //   name: 'focus',
  //   params: [
  //     {
  //       name: 'value',
  //       type: 'String',
  //       description: 'Value of the input field, at any time.',
  //     },
  //   ],
  //   description: 'Input element with rounded corners',
  // },
  // {
  // name: 'blur',
  // params: [
  // {
  // name: 'value',
  // type: 'String',
  // description: 'Value of the input field, at any time.',
  // },
  // ],
  // description: 'Input element with rounded corners',
  //   },
  // ],
};
export default DrawerAPI;
