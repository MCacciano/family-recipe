export default {
  name: 'recipe',
  title: 'Recipe',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      validation: Rule =>
        Rule.required().error(
          'A Recipe requires an Author. If you are not in the list please create an Author first.'
        ),
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
      name: 'totalTime',
      title: 'Total Time',
      type: 'string',
      description: 'Optional: Auto filled with Prep time + Cook time',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'ingredient'}],
        },
      ],
    },
  ],
};
