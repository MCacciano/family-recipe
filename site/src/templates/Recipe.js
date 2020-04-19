import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout/Layout';
import RecipeInfo from '../components/recipe-info/RecipeInfo';
import RecipeInfoList from '../components/recipe-info-list/RecipeInfoList';

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
      <div className="grid grid-cols-1 grid-rows-header h-vh90 sm:p-6 sm:mx-auto sm:h-vh50 sm:flex sm:flex-row-reverse md:max-w-screen-lg">
          <div className="flex justify-center text-center w-full sm:flex-col sm:justify-start">
            <h1 className="text-2xl sm:text-5xl font-light border-b-2 border-primary m-6">{name}</h1>
            <div className="hidden sm:flex">
              <RecipeInfoList recipeInfo={recipeInfo} />
            </div>
          </div>
          <Img fluid={image.asset.fluid} className="object-cover w-full" />
        <RecipeInfoList isMobile={true} recipeInfo={recipeInfo} />
      </div>
    </Layout>
  );

  // return (
  //   <Layout>
  //     <div className="flex flex-col sm:grid sm:grid-cols-2 font-rubik h-vh90 sm:h-vh50">
  //       <div className="flex justify-center flex-grow-0 mt-4 mb-6 sm:col-start-2 sm:hidden">
  //         <h1 className="text-2xl sm:text-5xl font-light border-b-2 border-primary">{name}</h1>
  //       </div>
  //       <Img fluid={image.asset.fluid} className="object-cover flex-grow sm:row-start-1" />
  //       <ul className="flex flex-grow-0 sm:hidden">
  //         {recipeInfo.map(({ ...props }, i) => (
  //           <RecipeInfo key={i} {...props} />
  //         ))}
  //       </ul>
  //       {/* figure out how to make this a custom layout in tailwind config */}
  //       <div className="hidden sm:flex sm:flex-col">
  //         <div className="flex justify-center flex-grow-0 mt-4 mb-6 sm:col-start-2">
  //           <h1 className="text-2xl sm:text-5xl font-light border-b-2 border-primary">{name}</h1>
  //         </div>
  //         <ul className="flex flex-grow-0">
  //           {recipeInfo.map(({ ...props }, i) => (
  //             <RecipeInfo key={i} {...props} />
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </Layout>
  // );
};

export default RecipeTemplate;
