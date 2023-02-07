export default {
  name: 'product_reviews',
  title: 'Product reviews',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Author Email',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'review',
      title: 'Review body',
      type: 'text',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'string'
    },
  ],
}
