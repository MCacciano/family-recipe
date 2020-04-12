import React from 'react';
import PropTypes from 'prop-types';

import RecipeListItem from '../recipe-list-item/RecipeListItem';

const RecipeList = ({ recipes }) => {
  return (
    <ul  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 p-4 gap-8">
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
