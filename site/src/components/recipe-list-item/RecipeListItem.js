import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const RecipeListItem = ({ id, image, name, slug }) => {
  return (
    <li className="relative rounded">
      <Link className="rounded block shadow-md" tag="li" key={id} to={`/recipes/${slug.current}`}>
        <Img className="rounded" fluid={image.asset.fluid} />
        <div className="absolute top-0 left-0 bg-black opacity-25 w-full h-full"></div>
        <div className="h-full w-full flex flex-column justify-center md:justify-start items-end absolute top-0 left-0 text-white p-4">
          <h2 className="text-2xl sm:text-4xl lg:text-2xl font-medium md:pl-4 md:pb-2">{name}</h2>
        </div>
      </Link>
    </li>
  );
};

RecipeListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.object,
  slug: PropTypes.object,
};

export default RecipeListItem;
