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
    <div className="flex bg-gray-900 text-white justify-between items-center px-8 md:px-16">
      <h2 className="flex items-center font-extrabold h-full text-2xl">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h2>
      <ul className="flex items-center font-bold h-full text-lg uppercase">
        <li className="hidden md:flex">
          <Link className="p-6" to="/">
            Home
          </Link>
        </li>
        <li className="hidden md:flex">
          <Link className="p-6" to="/recipes">
            Recipes
          </Link>
        </li>
        <li className="flex md:hidden flex-col justify-between h-6 w-8 cursor-pointer">
          <span className="h-1 w-full bg-white"></span>
          <span className="h-1 w-full bg-white"></span>
          <span className="h-1 w-full bg-white"></span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
