import React from 'react';
import AboutUser from './AboutUser.jsx';
import TitleSection from './TitleSection.jsx';
import EducationExperienceSec from './EducationExperienceSec.jsx';
import '../../styles/css/sections/Sections.css';

const Sections = () => {
  return (
    <div className="sections-container">
      <TitleSection titleSection="About me" iconTitle="faUser" />
      <AboutUser title="About me" />
      
      <TitleSection titleSection="Education" iconTitle="faUserGraduate" />
      <EducationExperienceSec />
      
      <TitleSection titleSection="Experience" iconTitle="faMedal" />
      <EducationExperienceSec />
    </div>
  );
}

export default Sections;
