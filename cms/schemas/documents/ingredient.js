export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().error('An Ingredient name is required'),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Sauce', value: 'sauce'},
          {title: 'Spice', value: 'spice'},
          {title: 'Meat', value: 'meat'},
          {title: 'Vegetable', value: 'vegetable'},
        ],
      },
      validation: Rule => Rule.required().error('An ingredient type must be chosen'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule =>
        Rule.warning('An image makes it easier to pick an ingredient from the list in a Recipe'),
    },
  ],
};
