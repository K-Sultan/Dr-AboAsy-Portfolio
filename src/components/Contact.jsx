import React, { useState } from 'react';
import './Contact.css';
import contactImage from '../assets/doctor - Copy.jpeg';
import { MessageSquare, Globe, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('aboasy123@gmail.com');
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="container contact-container">
        
        <div className="contact-left">
          <div className="contact-image-wrapper">
            <img src={contactImage} alt="Contact Dr. Ahmed Aboasy" className="contact-image" />
          </div>
          
          <div className="contact-info-card">
            <div className="info-col">
              <h4>Work Hours</h4>
              <p>Avaliable</p>
              {/* <p className="mt-2">Sunday<br/>11AM-2PM</p> */}
            </div>
            <div className="info-col">
              <h4>Location</h4>
              <p>Gharbia,EGY</p>
            </div>
            <div className="info-col">
              <h4>Support</h4>
              <p>aboasy123@gmail.com<br/>+20 115 208 0906</p>
              <div className="social-links">
                <a href="#" onClick={(e) => e.preventDefault()}><MessageSquare size={16} /></a>
                <a href="#" onClick={(e) => e.preventDefault()}><Globe size={16} /></a>
                <a href="#" onClick={(e) => e.preventDefault()}><Phone size={16} /></a>
                <a href="#" onClick={(e) => e.preventDefault()}><Mail size={16} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-action-card">
            <h2>Get In Touch</h2>
            <p className="form-subtitle">Choose the most convenient way to reach me. I'll get back to you as soon as possible!</p>
            
            <div className="direct-contact-options">
              <a href="https://wa.me/201152080906" target="_blank" rel="noopener noreferrer" className="action-btn whatsapp-btn">
                <MessageSquare size={20} />
                <div className="action-text">
                  <span>Message on WhatsApp</span>
                  <small>Fastest response</small>
                </div>
              </a>

              <a href="tel:+201152080906" className="action-btn phone-btn">
                <Phone size={20} />
                <div className="action-text">
                  <span>Call Directly</span>
                  <small>+20 115 208 0906</small>
                </div>
              </a>

              <button type="button" onClick={handleCopyEmail} className="action-btn email-btn" style={{ width: '100%', textAlign: 'left' }}>
                <Mail size={20} />
                <div className="action-text">
                  <span style={{ color: emailCopied ? 'var(--primary-color)' : '' }}>{emailCopied ? 'Copied to clipboard!' : 'Send an Email'}</span>
                  <small>{emailCopied ? 'You can now paste it anywhere' : 'aboasy123@gmail.com'}</small>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
