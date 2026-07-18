import React from 'react';
import { Activity, Target, Info, HeartPulse } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Activity className="feature-icon" />,
      title: "Personalized Rehab Plans",
      desc: "Every patient receives a customized rehabilitation program tailored to their specific condition and recovery goals."
    },
    {
      icon: <Target className="feature-icon" />,
      title: "Evidence-Based Treatment",
      desc: "All treatments follow modern physical therapy protocols backed by the latest clinical research and evidence."
    },
    {
      icon: <Info className="feature-icon" />,
      title: "Clear Communication",
      desc: "Your condition and treatment plan are explained in simple terms so you're always informed and confident."
    },
    {
      icon: <HeartPulse className="feature-icon" />,
      title: "Compassionate Care",
      desc: "Patients are treated with genuine empathy and dedication to achieving the best possible recovery outcomes."
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        
        <div className="features-header">
          <h2>Why Choose Me</h2>
          <p>Dedicated physical therapy focused on recovery, mobility, and long-term wellness.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
