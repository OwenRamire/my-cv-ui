import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMapMarkedAlt,
  faEnvelope,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const ContactInfoItem = (props) => {

  const iconToDisplay = (icon) => {
    switch(icon) {
      case 'faMapMarkedAlt':
        return (
          <a href="https://www.google.com/maps/place/Colima,+Col./@19.2400344,-103.7986482,12z/data=!3m1!4b1!4m5!3m4!1s0x842545523455a217:0xb6b497fc5af555e6!8m2!3d19.2452342!4d-103.7240868" className="link-contact-icon">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="icon-style" />
          </a>
        );
      case 'faEnvelope': 
        return (
          <a href="/" className="link-contact-icon">
            <FontAwesomeIcon icon={faEnvelope} className="icon-style" />
          </a>
        ); 
      case 'faLinkedIn':
        return (
          <a href="https://www.linkedin.com/in/owen-omar-ramirez-lopez-895a861a3/" className="link-contact-icon">
            <FontAwesomeIcon icon={faLinkedin} className="icon-style" />
          </a>
        );
      case 'faGitHub':
      return (
        <a href="https://github.com/OwenRamire" className="link-contact-icon">
          <FontAwesomeIcon icon={faGithub} className="icon-style" />
        </a>
      );
      case 'faInstagram': 
        return (
          <a href="https://www.instagram.com/owenramirez99/" className="link-contact-icon">
            <FontAwesomeIcon icon={faInstagram} className="icon-style" />
          </a>
        );
      default:
        return (
          <a href="/" className="link-contact-icon">
            <FontAwesomeIcon icon={faTimes} className="icon-style" />
          </a>
        );
    }
  }

  return (
    <div className="contact-info-item-container">
      {iconToDisplay(props.icon)}
      <h3 className="contact-info-item">{props.item}</h3>
    </div>
  );
}

export default ContactInfoItem;
