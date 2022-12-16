export default {
  name: 'category',
  title: 'Product Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'main_image',
      title: 'Main image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'is_top',
      title: 'Top Category',
      type: 'boolean',
    },
  ],
}
