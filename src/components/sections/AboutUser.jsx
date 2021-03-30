import React from 'react';

const AboutUser = (props) => {
  return (
    <div className="about-user-container-introducing">
      <p>{props.aboutUser}</p>
    </div>
  );
}

export default AboutUser;
