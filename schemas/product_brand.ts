export default {
  name: 'product_brand',
  title: 'Product brand',
  type: 'document',
  fields: [
    {
      name: 'brand',
      title: 'Product brand',
      type: 'string',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
