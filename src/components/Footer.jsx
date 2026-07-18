import React from 'react';
import './Footer.css';
import doctorImage from '../assets/doctor_nobg.png';

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
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">📌</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">About Profile</a></li>
                <li><a href="#">Local Address</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Clinic</a></li>
              </ul>
            </div>
            <div className="link-col">
              <h4>Quick Hours</h4>
              <ul>
                <li><a href="#">Hours</a></li>
                <li><a href="#">Hours</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="link-col">
              <h4>Subscribe</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
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
