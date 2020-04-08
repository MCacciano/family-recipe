import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo/Seo';

// query newest 3 recipes
export const pageQuery = graphql`
  query ThreeNewestRecipes {
    recipes: allSanityRecipe(limit: 3, sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          _id
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

const IndexPage = ({ data }) => {
  console.log('data', data);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>HOME PAGE</h1>
      <h2>3 NEWEST RECIPES WILL BE BELOW</h2>
      <h2>GO TO THE RECIPES PAGE FOR THE FULL LIST OF RECIPES</h2>
      <ul className="container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols:1 gap-8">
        {data.recipes.edges.map(({ node }) => {
          const { _id, name, slug, image } = node;

          return (
            <li key={_id} className="rounded border-red-600 shadow">
              <Link className="flex flex-col" key={_id} to={`/recipes/${slug.current}`}>
                <Img fluid={image.asset.fluid} />
                <h2 className="py-4 pl-4">{name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default IndexPage;
