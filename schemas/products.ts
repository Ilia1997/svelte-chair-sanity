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
      description: 'required',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'required',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'short_desc',
      title: 'Short description',
      type: 'string',
    },
    {
      name: 'code',
      title: 'Code',
      type: 'string',
      description: 'required',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'required',
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
    //available quantity
    {
      name: 'is_sale',
      type: 'boolean',
      title: 'Is sale',
    },
    {
      name: 'available_quantity',
      type: 'number',
      title: 'Available quantity',
      validation: (Rule: any) => Rule.required().min(0),
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
      name: 'imagesGallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'labels',
      title: 'Actions labels',
      type: 'array',
      of: [{ type: 'image' }]
     },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'reference', to: {type: 'features'}}],
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product_reviews'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Full description',
      type: 'richText',
    },
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoKeywords', title: 'SEO Keywords', type: 'string', group: 'seo'},
    {name: 'seoDesc', title: 'SEO Description', type: 'string', group: 'seo'},
    {name: 'seoSlug', title: 'SEO Slug', type: 'slug', group: 'seo'},
    {name: 'seoImage', title: 'SEO Image', type: 'image', group: 'seo'},
  ],
}
