// /lib/isUniqueAcrossAllDocuments.js

// Note: this assumes that every document that has a slug field
// have it on the `slug` field at the root
export async function isUniqueAcrossAllDocuments(code, context) {
  const {document, getClient} = context
  const client = getClient({apiVersion: '2022-12-07'})
  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    code,
  }
  const query = `!defined(*[!(_id in [$draft, $published]) && code.current == $code][0]._id)`
  const result = await client.fetch(query, params)
  return result
}
