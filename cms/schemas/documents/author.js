export default {
  name: 'author', 
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This will be displayed on Recipe you create',
      validation: Rule => Rule.required().error('An Author name is required')
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}