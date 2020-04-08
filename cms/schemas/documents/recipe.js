export default {
  name: 'recipe',
  title: 'recipe',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'prepTime',
      title: 'Prep Time',
      type: 'string',
      description: 'Examples: 10 minutes, 1 hour, etc...',
    },
    {
      name: 'cookTime',
      title: 'Cook Time',
      type: 'string',
      description: 'Examples: 10 minutes, 1 hour, etc...',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
