export default {
  name: 'FAQ',
  type: 'document',
  title: 'FAQ',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question?',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'answer',
      type: 'string',
      title: 'Answer',
      description: "required",
      validation: (Rule: any) => Rule.required(),
    },
    {name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo'},
    {name: 'seoKeywords', title: 'SEO Keywords', type: 'string', group: 'seo'},
    {name: 'seoDesc', title: 'SEO Description', type: 'string', group: 'seo'},
  ],
}
