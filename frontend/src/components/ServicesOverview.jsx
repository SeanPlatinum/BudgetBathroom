import { Link } from 'react-router-dom';
import './ServicesOverview.css';

const ServicesOverview = () => {

  return (
    <section className="services-overview">
      <div className="container">
        <div className="section-header">
          <h2>A TRUSTED NAME IN HOME IMPROVEMENT</h2>
          <p>
            Budget Bathroom has helped families throughout the region enjoy 
            beautiful, functional bathrooms. Quality products, outstanding craftsmanship, and 
            dedication to customer satisfaction are at the core of our philosophy. Plus, we work 
            with customers to make bathroom remodeling more affordable, with{' '}
            <a href="#financing" className="text-link">competitive rates and payment plans</a> that fit your budget.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card service-card-showers">
            <div className="service-card-overlay"></div>
            <div className="service-card-content">
              <h3 className="service-card-title">Showers</h3>
              <div className="service-card-title-underline"></div>
              <p className="service-card-description">
                Expert shower replacement services with industry-leading warranties to protect your investment.
              </p>
              <ul className="service-card-list">
                <li>Walk-in Showers</li>
                <li>Shower Replacement</li>
                <li>Custom Shower Designs</li>
                <li>Accessibility Features</li>
              </ul>
              <Link to="/showers" className="service-card-button">
                LEARN MORE
              </Link>
            </div>
            <Link to="/showers" className="service-card-hover-overlay">
              <div className="hover-content">
                <span className="hover-text">LEARN MORE</span>
              </div>
            </Link>
          </div>
          <div className="service-card service-card-bathtubs">
            <div className="service-card-overlay"></div>
            <div className="service-card-content">
              <h3 className="service-card-title">Bathtubs</h3>
              <div className="service-card-title-underline"></div>
              <p className="service-card-description">
                Bath remodeling specialists committed to quality products and quick installation.
              </p>
              <ul className="service-card-list">
                <li>Bathtub Replacement</li>
                <li>Soaking Tubs</li>
                <li>Walk-in Tubs</li>
                <li>Custom Bath Solutions</li>
              </ul>
              <Link to="/bathtubs" className="service-card-button">
                LEARN MORE
              </Link>
            </div>
            <Link to="/bathtubs" className="service-card-hover-overlay">
              <div className="hover-content">
                <span className="hover-text">LEARN MORE</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

