import React from 'react';
import './Education.css';
import educationImage from '../assets/aboasy with kids.jpeg';
import { Crosshair } from 'lucide-react'; // Using a small icon for bullet points

const Education = () => {
  const credentials = [
    "Pediatric",
    "Motivation Skills",
    "Observation Skills",
    "Communication with patients",
    "Experience at Khatwa Clinic",
    "Experience at Bedaya Clinic",
  ];

  return (
    <section id="education" className="education">
      <div className="container education-container">
        
        <div className="education-image-col">
          <div className="image-wrapper">
            <img src={educationImage} alt="Dr. Ahmed Aboasy Education" className="edu-image" />
          </div>
        </div>

        <div className="education-content-col">
          <h3>Education & Credentials</h3>
          <ul className="credentials-list">
            {credentials.map((item, index) => (
              <li key={index}>
                <span className="bullet-icon">⟡</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Education;
