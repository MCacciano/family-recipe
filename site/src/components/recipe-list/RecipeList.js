import React from 'react';
import PropTypes from 'prop-types';

import RecipeListItem from '../recipe-list-item/RecipeListItem';

const RecipeList = ({ recipes }) => {
  return (
    <ul className="max-w-lg mx-auto md:max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 p-8 gap-8">
      {recipes.edges.map(({ node: { id, ...rest } }) => (
        <RecipeListItem key={id} {...rest} />
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.object,
};

export default RecipeList;
