export default {
  name: 'features',
  title: 'Product features',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: () => `f-${(Math.random() + Date.now() + 1).toString()}`
      },
    },
    {
      name: 'type',
      title: 'Product type',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product_type'}}],
    },
    {
      name: 'brand',
      title: 'Product brand',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product_brand'}}],
    },
    {
      name: 'color',
      title: 'Product color',
      type: 'color',
      options: {
        disableAlpha: true
      }
    },
    {
      name: 'size',
      title: 'Product size',
      description: 'value between "[]" symbols, for example: [XS]',
      type: 'string'
    },
    {
      name: 'warranty',
      title: 'Product warranty',
      description: 'value in monthes',
      type: 'number'
    },
  ],
}
