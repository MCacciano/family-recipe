import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faHistory, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faClock, faHistory, faUsers);

const RecipeInfo = ({ icon, title, size, prepTime, cookTime, servings }) => {

  return (
    <li className="flex flex-auto flex-col items-center p-2 text-textBlack">
      <span className="text-sm">{prepTime || cookTime || servings || '0'}</span>
      <span className="text-sm font-bold font-roboto">{title}</span>
      <FontAwesomeIcon className="m-2 text-primary" icon={icon} size={size || 'lg'} />
    </li>
  );
};

export default RecipeInfo;
