import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout/Layout';

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
  console.log('data', data);
  const { image, name, author, prepTime, cookTime, totalTime, ingredients } = data.recipe;

  return (
    <Layout>
      <div className="container my-10" style={{ fontFamily: 'Rubik' }}>
        <div className="grid grid-cols-2 border border-textBlack" style={{ height: '500px' }}>
          <Img fluid={image.asset.fluid} />
          <div className="flex flex-col p-4 text-center">
            <h1 className="text-5xl font-light">{name}</h1>
            <div className="flex justify-evenly my-4 text-lg">
              <h3 className="flex flex-col items-center">
                <span className="font-bold">Prep</span> {prepTime || '-'}
              </h3>
              <div className="bg-primary h-full w-1"></div>
              <h3 className="flex flex-col items-center">
                <span className="font-bold">Cook</span> {cookTime || '-'}
              </h3>
              <div className="bg-primary h-full w-1"></div>
              <h3 className="flex flex-col items-center">
                <span className="font-bold">Total</span> {totalTime || '-'}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeTemplate;
