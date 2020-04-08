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
  return (
    <Layout>
      <SEO title="Home" />
      <div className="overflow-hidden absolute top-0 left-0 w-full h-full">
        <Img fluid={hero.edges[Math.floor(Math.random() * 20)].node.heroImg.childImageSharp.fluid} />
        {/* <div className="bg-no-repeat bg-cover h-full w-full" style={{ backgroundImage: `url(${bgImg})` }}></div> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
