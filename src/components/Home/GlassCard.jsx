import React from 'react';
import Dashboard from '../dashboard/Dashboard.jsx';
import Sections from '../sections/Sections.jsx';
import '../../styles/css/Home/Home.css';

const GlassCard = () => {
  return (
    <main>
      <section className="glass">
        <Dashboard />
        <Sections />
      </section>
    </main>
  );
}

export default GlassCard;