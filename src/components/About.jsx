import React from 'react';
import './About.css';
import aboutImage from '../assets/Profile-1858.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        
        <div className="about-image-column">
          <div className="image-card">
            <img src={aboutImage} alt="Dr. Ahmed Aboasy examining a patient" className="about-image" />
          </div>
        </div>

        <div className="about-text-column">
          <h2>About</h2>
          <p className="about-description">
            Dr. Ahmed Aboasy is a <strong>Physical Therapist</strong> student at Delta University. He has practical experience working in <strong>Khatwa</strong> and <strong>Bedaya</strong> clinics, focusing on improving patients' physical well-being.
          </p>
          <button className="btn-primary about-btn">
            More About Me <span>↗</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
