import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faClock);

const RecipeInfo = ({ icon, title, size }) => {
  const [faIcon, setFaIcon] = useState(null);

  useEffect(() => {
    switch (icon.toLowerCase()) {
      case 'clock':
        setFaIcon(faClock);
        break;
      default:
        break;
    }
  }, []);

  return (
    <li className="flex sm:flex-col items-center justify-center border border-1 border-textBlack bg-textBlack p-2">
      <FontAwesomeIcon className="m-4" icon={faIcon} size={size} />
      <span>{title}</span>
    </li>
  );
};

export default RecipeInfo;
