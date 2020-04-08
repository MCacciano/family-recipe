import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout/Layout';

export const pageQuery = graphql`
  query($id: String!) {
    recipes: allSanityRecipe(filter: { id: { eq: $id } }, sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          _id
          name
          slug {
            current
          }
          image {
            asset {
              url
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const RecipeTemplate = ({ data, pageContext }) => {
  const { image, name } = data.recipes.edges[0].node;

  return (
    <Layout>
      <div>
        <h1>{name}</h1>
        <Img fluid={image.asset.fluid} />
      </div>
    </Layout>
  );
};

export default RecipeTemplate;
