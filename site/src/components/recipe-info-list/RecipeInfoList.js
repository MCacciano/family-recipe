import React from 'react';

import RecipeInfo from '../recipe-info/RecipeInfo';

import { StyledRecipeInfo } from './RecipeInfoList.styled';

const RecipeInfoList = ({ recipeInfo }) => {
  return (
    <StyledRecipeInfo>
      {recipeInfo.map(({ ...props }, i) => (
        <RecipeInfo key={i} {...props} />
      ))}
    </StyledRecipeInfo>
  );
};

export default RecipeInfoList;
