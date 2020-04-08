const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const RecipePageTemplate = path.resolve('./src/templates/Recipe.js');

  const res = await graphql(`
    {
      allSanityRecipe(sort: { fields: _createdAt, order: DESC }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }

  const recipes = res.data.allSanityRecipe.edges;

  recipes.forEach(({ node: { id, slug } }) => {
    createPage({
      path: `/recipes/${slug.current}`,
      component: RecipePageTemplate,
      context: {
        id,
      },
    });
  });
};
