import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import axios from 'axios';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo/Seo';

// query newest 3 recipes
export const pageQuery = graphql`
  query HomePageQuery {
    hero: allPixabayPhoto {
      edges {
        node {
          heroImg {
            url
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
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

const IndexPage = ({ data: { hero } }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="overflow-hidden absolute left-0 w-full flex justify-center items-center"
        style={{ height: '80vh', top: '64px' }}
      >
        <div className="absolute h-full w-full left-0 bg-black opacity-50 z-10"></div>
        <Img
          className="h-full w-full"
          fluid={hero.edges[Math.floor(Math.random() * 20)].node.heroImg.childImageSharp.fluid}
        />
        {/* <div className="bg-white absolute z-20 w-3/4 p-4 rounded shadow">
          <h2 className="text-2xl">Search Recipes</h2>
          <form onSubmit={handleSubmit}>
            <div class="w-full">
              <input
                class="appearance-none block w-full text-gray-700 border bg-gray-100 border-textBlack rounded leading-tight focus:outline-none focus:bg-white h-10 pl-4 my-2"
                id="grid-first-name"
                type="text"
                placeholder="Recipe or Ingredient"
              />
            </div>
          </form>
        </div> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
