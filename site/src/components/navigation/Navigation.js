import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      className="flex bg-textBlack text-white justify-between items-center px-8 md:px-16"
      style={{ height: '64px' }}
    >
      <h2 className="flex items-center font-extrabold h-full text-2xl">
        <Link className="h-full flex items-center" to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h2>
      <ul className="flex items-center font-bold h-full text-lg uppercase">
        <li className="hidden md:flex h-full">
          <Link className="px-4 h-full flex items-center" to="/">
            Home
          </Link>
        </li>
        <li className="hidden md:flex h-full">
          <Link className="px-4 h-full flex items-center" to="/recipes">
            Recipes
          </Link>
        </li>
        <li className="flex md:hidden flex-col justify-between w-8 cursor-pointer h-full">
          <span className="h-1 w-full bg-white"></span>
          <span className="h-1 w-full bg-white"></span>
          <span className="h-1 w-full bg-white"></span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
