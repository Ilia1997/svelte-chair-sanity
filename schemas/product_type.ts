export default {
  name: 'product_type',
  title: 'Product type',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Product type',
      type: 'string',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
