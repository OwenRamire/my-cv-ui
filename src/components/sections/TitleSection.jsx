import React from 'react';
import {
  faUser,
  faUserGraduate,
  faMedal,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TitleSection = (props) => {

  const iconTitleToDisplay = (icon) => {
    switch(icon) {
      case 'faUser': 
        return <FontAwesomeIcon icon={faUser} className="icon-title" />;
      case 'faMedal':
        return <FontAwesomeIcon icon={faMedal} className="icon-title" />;
      case 'faUserGraduate':
        return <FontAwesomeIcon icon={faUserGraduate} className="icon-title" />;
      default: 
        return <FontAwesomeIcon icon={faTimes} className="icon-title" />
    }
  }

  return (
    <div className="title-sect-container">
      <h1>{props.titleSection}</h1>
      {iconTitleToDisplay(props.iconTitle)}
    </div>
  );
}

export default TitleSection;
