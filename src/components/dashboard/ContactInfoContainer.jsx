import React from 'react';
import ContactInfoItem from '../dashboard/ContactInfoItem';

const ContactInfo = () => {
  const userContactItems = ['Colima, col', 'owenomar29@gmail.com', 'owen omar ramirez lopez', '@owenramire', '@owenramirez99'];
  const userContactItemsIcons = ['faMapMarkedAlt', 'faEnvelope', 'faLinkedIn','faGitHub', 'faInstagram'];

  const displayUserContact = () => {
    return userContactItems.map((item, index) => {
      return (
        <ContactInfoItem
          key={index.toString()}
          icon={userContactItemsIcons[index]}
          item={item}
        />
      );
    })
  }

  return (
    <div className="contact-info-container">
      {displayUserContact()}
    </div>
  );
}

export default ContactInfo;