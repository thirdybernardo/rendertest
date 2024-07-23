// src/Hero.jsx
import React from 'react';
import heroPhone from '../assets/banner1.png';
import live from '../assets/live.png';
import startTrain from '../assets/startTrain.png';
import './Hero.css'; // You will create this CSS file next

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">We made a</h1>
        <h1 className="hero-title">Software that’s</h1>
        <h1 className="hero-title hero-title-gradient">Connecting Traders</h1>
        <p className="hero-paragraph">
          With Traderise everyone can enjoy the benefit of trade and play
          together inside your charts with your mentors on
          <img src={live} className="live" alt="live" />
        </p>
        <img src={startTrain} className="startTrain" alt="live" />
      </div>
      <div className="hero-right">
        <img src={heroPhone} alt="Banner" className="hero-banner" />
      </div>
    </section>
  );
};

export default Hero;
