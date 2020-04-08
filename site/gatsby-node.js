const path = require('path');
const axios = require('axios');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type PixabayHeroImage implements Node {
      heroImg: File @link(from: "heroImg___NODE")
    }
  `);
};

exports.onCreateNode = async ({ node, actions: { createNode }, store, cache, createNodeId }) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === 'PixabayPhoto' && node.largeImageURL !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.largeImageURL, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    });
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.heroImg___NODE = fileNode.id;
    }
  }
};
exports.sourceNodes = async ({ actions: { createNode }, createNodeId, createContentDigest }) => {
  const apiUrl = `https://pixabay.com/api/?key=12635206-e5f3fb22225e367a6b2cf5bff&q=food&category=food&image_type=photo&orientation=horizontal&per_page=20`;
  const { data } = await axios.get(apiUrl);

  data.hits.forEach(photo => {
    createNode({
      ...photo,
      id: createNodeId(`pixabay-photo-${photo.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'PixabayPhoto',
        content: JSON.stringify(photo),
        contentDigest: createContentDigest(photo),
      },
    });
  });
};

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
