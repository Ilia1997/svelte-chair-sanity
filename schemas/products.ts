export default {
  name: 'products',
  type: 'document',
  title: 'Products',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: "required",
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'code',
      title: 'Code',
      type: 'string',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'old_price',
      type: 'number',
      title: 'Old price',
    },
    {
      name: 'sale',
      type: 'number',
      title: 'Sale',
    },
    {
      name: 'is_sale',
      type: 'boolean',
      title: 'Is sale',
    },
    {
      name: 'is_hero_slide',
      type: 'boolean',
      title: 'Is hero slide',
    },
    {
      name: 'main_image',
      title: 'Main image',
      type: 'image',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'richText',
    },
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoKeywords', title: 'Keywords', type: 'string', group: 'seo'},
    {name: 'seoSlug', title: 'Slug', type: 'slug', group: 'seo'},
    {name: 'seoImage', title: 'Image', type: 'image', group: 'seo'},
  ],
}
