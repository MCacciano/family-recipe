import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout/Layout';
import RecipeInfo from '../../components/recipe-info/RecipeInfo';
import RecipeInfoList from '../../components/recipe-info-list/RecipeInfoList';

import { StyledRecipe, HeroCopy, HeroCopyTitle } from './Recipe.styled.js';

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
          fluid(maxWidth: 1000) {
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

  const [recipeInfo] = useState([
    {
      icon: ['far', 'clock'],
      title: 'Prep',
      prepTime,
    },
    {
      icon: ['fas', 'history'],
      title: 'Cook',
      cookTime,
    },
    {
      icon: ['fas', 'users'],
      title: 'Servings',
      servings: '4',
    },
  ]);

  return (
    <Layout>
      <StyledRecipe>
        <Img fluid={image.asset.fluid} />
        <HeroCopy>
          <HeroCopyTitle>{name}</HeroCopyTitle>
          <RecipeInfoList recipeInfo={recipeInfo} />
        </HeroCopy>
      </StyledRecipe>
    </Layout>
  );

  // return (
  //   <Layout>
  //     <div className="grid grid-cols-1 grid-rows-header h-vh90 sm:p-6 sm:mx-auto sm:h-vh50 sm:flex sm:flex-row-reverse md:max-w-screen-lg">
  //       <div className="flex justify-center text-center w-full sm:flex-col sm:justify-start">
  //         <h1 className="text-2xl sm:text-5xl font-light border-b-2 border-primary m-6">{name}</h1>
  //         <div className="hidden sm:flex">
  //           <RecipeInfoList recipeInfo={recipeInfo} />
  //         </div>
  //       </div>
  //       <Img fluid={image.asset.fluid} className="object-cover w-full" />
  //       <RecipeInfoList isMobile={true} recipeInfo={recipeInfo} />
  //     </div>
  //   </Layout>
  // );
};

export default RecipeTemplate;
