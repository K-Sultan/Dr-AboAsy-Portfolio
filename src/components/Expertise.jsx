import React from 'react';
import './Expertise.css';
import expertiseImage from '../assets/doctor_nobg.png';

const Expertise = () => {
  const expertise = [
    "Musculoskeletal Rehabilitation",
    "Manual Therapy Techniques",
    "Sports Injury Recovery",
    "Therapeutic Exercises",
    "Patient-centered physical therapy care"
  ];

  return (
    <section id="services" className="expertise">
      <div className="container expertise-container">
        
        <div className="expertise-content-col">
          <h3>Areas of Expertise</h3>
          <ul className="expertise-list">
            {expertise.map((item, index) => (
              <li key={index}>
                <span className="bullet-icon">⟡</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="expertise-image-col">
          <div className="image-wrapper">
            <img src={expertiseImage} alt="Dr. Ahmed Aboasy Expertise" className="exp-image" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;
