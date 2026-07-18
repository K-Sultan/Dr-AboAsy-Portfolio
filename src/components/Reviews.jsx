import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <section className="reviews section-padding">
      <div className="container">
        <div className="reviews-wrapper">
          <div className="reviews-header">
            <h3>My Patient<br/>Review</h3>
            <div className="reviews-nav">
              <button className="nav-btn prev">{"<"}</button>
              <button className="nav-btn next">{">"}</button>
            </div>
          </div>
          <div className="reviews-cards">
            <div className="review-card">
              <p className="review-text">"He is attentive listeners to client and explain my condition clearly. I felt confident and well cared for throughout my treatment."</p>
              <div className="review-author">
                <div>
                  <strong>Michael Fl</strong>
                  <span className="author-loc">Kenya</span>
                </div>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <div className="review-card">
              <p className="review-text">"The compassion and the Care of biology explores more patients in requirements terms appointments any life second actions. Just a comfort program in fun medicine out doing patients."</p>
              <div className="review-author">
                <div>
                  <strong>Patient G.</strong>
                  <span className="author-loc">Facebook</span>
                </div>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
