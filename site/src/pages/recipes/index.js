import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo/Seo';
import RecipeList from '../../components/recipe-list/RecipeList';

export const pageQuery = graphql`
  query AllSanityRecipes {
    recipes: allSanityRecipe {
      edges {
        node {
          id
          name
          slug {
            current
          }
          image {
            asset {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const RecipesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <RecipeList recipes={data.recipes} />
    </Layout>
  );
};

export default RecipesPage;
