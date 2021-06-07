import React from 'react';
import '../../styles/css/sections/Sections.css';

const EducationExperienceSec = (props) => {
  return (
    <div className="about-user-container">
      <h1 className="title-where">{props.institutionPosition}</h1>
      <h4 className="title-when">
        {props.date}
      </h4>
      <p className="description-educ-exp">
        {props.description}
      </p>
    </div>
  );
}

export default EducationExperienceSec;