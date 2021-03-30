import React from 'react';
import AboutUser from './AboutUser.jsx';
import TitleSection from './TitleSection.jsx';
import EducationExperienceSec from './EducationExperienceSec.jsx';
import {
  USER_ABOUT_ME,
  USER_INFO_EXPERIENCE,
  USER_EDUCATION,
} from '../../utils/UserInfo';
import '../../styles/css/sections/Sections.css';

const Sections = () => {

  const displayExperienceUser = () => {
    return USER_INFO_EXPERIENCE.map((exp, i) => {
      return (
        <EducationExperienceSec
          key={i.toString()}
          institutionPosition={exp.institutionAndPosition}
          date={exp.date}
          description={exp.description }
        />
      );
    });
  }

  const displayEducationUser = () => {
    return USER_EDUCATION.map((education, i) => {
      return (
        <EducationExperienceSec
          key={i.toString()}
          institutionPosition={education.institutionAndPosition}
          date={education.date}
          description={education.description}
        />
      )
    });
  }

  return (
    <div className="sections-container">
      <TitleSection titleSection="About me" iconTitle="faUser" />
      <AboutUser title="About me" aboutUser={USER_ABOUT_ME} />
      <TitleSection titleSection="Education" iconTitle="faUserGraduate" />
      {displayEducationUser()}
      <TitleSection titleSection="Experience" iconTitle="faMedal" />
      {displayExperienceUser()}
    </div>
  );
}

export default Sections;
