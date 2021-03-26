import React from 'react';
import CirculesBackground from '../components/Home/CirclesBackground.jsx';
import GlassCard from '../components/Home/GlassCard.jsx';
import '../styles/css/Home/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <GlassCard />
      <CirculesBackground />
    </div>
  );
}

export default Home;