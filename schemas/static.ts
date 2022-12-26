export default {
  name: 'staticPages',
  type: 'document',
  title: 'Static Pages',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'features',
      title: 'Out features',
    },
    {
      name: 'about',
      title: 'About us',
    },
    {
      name: 'contacts',
      title: 'Contacts',
    },
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Title',
      group: ['about', 'contacts'],
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'main_image',
      title: 'Main image',
      type: 'image',
      group: ['about', 'contacts'],
    },
    {
      name: 'body',
      title: 'Full description',
      type: 'richText',
      group: ['about', 'contacts'],
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
      group: ['about', 'contacts'],
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      group: 'contacts',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      group: 'contacts',
    },
    
    {name: 'featuresDelivery', title: 'Our delivery', type: 'string', group: 'about'},
    {name: 'featuresCash', title: 'Our cashback', type: 'string', group: 'about'},
    {name: 'featuresQuality', title: 'Our quality', type: 'string', group: 'about'},
    {name: 'featuresSupport', title: 'Our support', type: 'string', group: 'about'},

    {name: 'contactSupport', title: 'Contact support', type: 'string', group: 'contacts'},
    {name: 'contactShipping', title: 'Contact shipping', type: 'string', group: 'contacts'},

    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoKeywords', title: 'SEO Keywords', type: 'string', group: 'seo'},
    {name: 'seoDesc', title: 'SEO Description', type: 'string', group: 'seo'},
  ],
}
