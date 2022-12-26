export default {
  name: 'globalSettings',
  type: 'document',
  title: 'Project Settings',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'logotype',
      title: 'Project logotype',
      type: 'image',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Project phone',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Project e-mail',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Project address',
    },
    {
      name: 'textColor',
      title: 'All Texts color',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
    {
      name: 'textHeadingColor',
      title: 'Heding text color',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
    {
      name: 'linkColor',
      title: 'Link color',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
    {
      name: 'buttonTextColor',
      title: 'Buttons text color',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
    {
      name: 'buttonBgColor',
      title: 'Buttons bg color',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
    {
      name: 'bgCrumbs',
      title: 'breadcrumbs bg color',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
    {
      name: 'bgMainColor1',
      title: 'Main bg color 1',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
    {
      name: 'bgMainColor2',
      title: 'Main bg color 2',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
  ],
}
