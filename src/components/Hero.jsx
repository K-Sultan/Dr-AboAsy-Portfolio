import React from 'react';
import './Hero.css';
import heroImage from '../assets/doctor_nobg.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <div className="hero-content">
          {/* Left: Text & Info */}
          <div className="hero-left">
            <span className="hero-badge">Physical Therapist</span>
            <h1 className="hero-title">
              Dr. Ahmed<br />
              <span className="hero-title-accent">Aboasy</span>
            </h1>
            <p className="hero-subtitle">
              Physical Therapy Student at Delta University, dedicated to delivering
              compassionate and effective rehabilitation care.
            </p>

            <div className="hero-qualifications">
              <div className="qual-tag">🎓 Delta University</div>
              <div className="qual-tag">🏥 Khatwa &amp; Bedaya Clinics</div>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <h3>2+</h3>
                <p>Active Clinics</p>
              </div>
              <div className="stat-item">
                <h3>PT</h3>
                <p>Faculty of Physical Therapy</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Dr. Ahmed Aboasy" className="hero-image" />
              <div className="hero-image-gradient"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
