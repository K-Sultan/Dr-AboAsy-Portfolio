import React from 'react';
import './Footer.css';
import doctorImage from '../assets/doctor - Copy.jpeg';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-title">
            <h2>Let's Connect With Me</h2>
          </div>
          <div className="footer-ecg"></div>
        </div>
        
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={doctorImage} alt="Dr. Ahmed Aboasy" className="footer-avatar" />
              <div>
                <strong>Dr. Ahmed Aboasy</strong>
                <span>Physical Therapist</span>
              </div>
            </div>
            <div className="social-links">
              <span className="social-icon">📷</span>
              <span className="social-icon">📘</span>
              <span className="social-icon">🐦</span>
              <span className="social-icon">📌</span>
            </div>
          </div>
          <div className="footer-links">
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Click &copy; Priva I. A Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
