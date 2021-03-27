import React from 'react';

const AboutUser = (props) => {
  return (
    <div className="about-user-container-introducing">
      <h1>{props.title}</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Praesent blandit nibh at felis. Sed nec diam in dolor vestibulum
      aliquet. Duis ullamcorper, nisi non facilisis molestie, lorem sem
      aliquam nulla, id lacinia velit mi vestibulum enim.</p>
    </div>
  );
}

export default AboutUser;
