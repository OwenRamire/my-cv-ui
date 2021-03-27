import React from 'react';
import UserInfo from './UserInfo.jsx';
import ContactInfoContainer from './ContactInfoContainer.jsx';
import '../../styles/css/dashboard/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <UserInfo
        name='Owen Ramirez'
        occupation='Telematics engineer'
      />
      <ContactInfoContainer />
    </div>
  );
}

export default Dashboard;