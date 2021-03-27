import React from 'react';
import UserImage from '../../assets/images/userImg.jpg';

const UserInfo = (props) => {
  return (
    <div className="user-container">
      <img src={UserImage} alt="" className="user-avatar" />
      <h3 className="user-name">{props.name}</h3>
      <p className="user-occupation">{props.occupation}</p>
    </div>
  );
}

export default UserInfo;