import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout/Layout';
import RecipeInfo from '../components/recipe-info/RecipeInfo';

//   /recipes/:slug
export const pageQuery = graphql`
  query RecipeQuery($id: String!) {
    recipe: sanityRecipe(id: { eq: $id }) {
      id
      name
      prepTime
      cookTime
      totalTime
      slug {
        current
      }
      image {
        asset {
          url
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
      ingredients {
        name
        type
      }
    }
  }
`;

const RecipeTemplate = ({ data }) => {
  const { image, name, author, prepTime, cookTime, totalTime, ingredients } = data.recipe;

  const [recipeInfo, setRecipeInfo] = useState([
    {
      icon: 'clock',
      size: 'lg',
      title: 'Prep',
    },
    {
      icon: 'clock',
      size: 'lg',
      title: 'Cook',
    },
    {
      icon: 'clock',
      size: 'lg',
      title: 'Total',
    },
    {
      icon: 'clock',
      size: 'lg',
      title: 'Servings',
    },
  ]);

  return (
    <Layout>
      <div className="grid grid-cols-1 border border-textBlack font-rubik">
        <div className="flex justify-center my-4">
          <h1 className="text-2xl sm:text-5xl font-light border-b-2 border-primary">{name}</h1>
        </div>
        <Img fluid={image.asset.fluid} />
        <ul className="grid grid-cols-2 sm:grid-cols-4 text-white list-none">
          {recipeInfo.map(({ ...props }) => (
            <RecipeInfo {...props} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default RecipeTemplate;
