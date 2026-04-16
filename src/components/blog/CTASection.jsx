import React from "react";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Explore the Best Education for Your Child?</h2>
        <p>
          Take the first step towards your child's bright future. Visit our school
          campus, meet our faculty, and experience our world-class facilities.
        </p>

        <div className="cta-buttons">
          <a href="/book-visit" className="cta-button primary">
            Book a School Visit
          </a>
          <a href="/enquire" className="cta-button secondary">
            Enquire Now
          </a>
          <a href="/contact" className="cta-button outline">
            Contact Us
          </a>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          margin: 60px 0 40px;
          padding: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          color: white;
          text-align: center;
        }

        .cta-content h2 {
          font-family: Georgia, "Playfair Display", serif;
          font-size: 28px;
          margin-bottom: 16px;
          color: white;
        }

        .cta-content p {
          font-size: 18px;
          margin-bottom: 32px;
          opacity: 0.95;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 14px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-button.primary {
          background: white;
          color: #667eea;
          border: 2px solid white;
        }

        .cta-button.primary:hover {
          background: transparent;
          color: white;
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: white;
          color: #667eea;
        }

        .cta-button.outline {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .cta-button.outline:hover {
          border-color: white;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 30px 20px;
          }

          .cta-content h2 {
            font-size: 24px;
          }

          .cta-content p {
            font-size: 16px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;