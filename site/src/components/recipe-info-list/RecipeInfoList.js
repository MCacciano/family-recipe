import React from 'react';

import RecipeInfo from '../recipe-info/RecipeInfo';

const RecipeInfoList = ({ recipeInfo, isMobile }) => {
  return (
    <ul className={`w-full ${isMobile ? 'flex sm:hidden' : 'hidden sm:flex'}`}>
      {recipeInfo.map(({ ...props }, i) => (
        <RecipeInfo key={i} {...props} />
      ))}
    </ul>
  );
};

export default RecipeInfoList;
