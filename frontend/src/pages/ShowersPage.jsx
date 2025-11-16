import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EstimateModal from '../components/EstimateModal';
import './ServicePage.css';

const ShowersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="service-page">
      <Header onRequestEstimate={() => setIsModalOpen(true)} />
      <div className="service-page-hero">
        <div className="container">
          <h1>Shower Remodeling Services</h1>
          <p className="service-page-subtitle">Transform your bathroom with our expert shower installation and remodeling services</p>
        </div>
      </div>
      <div className="service-page-content">
        <div className="container">
          <div className="service-page-section">
            <h2>Expert Shower Replacement Services</h2>
            <p>
              With years of bathroom remodeling experience, Budget Bathroom builds trust and peace of mind 
              into every shower installation. Our highly-skilled experts provide shower replacement services 
              for a variety of styles, from modern walk-in showers to luxurious spa-like designs. We offer 
              comprehensive warranties on all shower replacements.
            </p>
          </div>

          <div className="service-page-section">
            <h2>Our Shower Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Walk-in Showers</h3>
                <p>
                  Modern, barrier-free walk-in showers that provide easy access and a sleek, contemporary look. 
                  Perfect for accessibility needs or simply for a more open, spacious feel in your bathroom.
                </p>
              </div>
              <div className="service-item">
                <h3>Shower Replacement</h3>
                <p>
                  Complete shower replacement services including removal of old fixtures, plumbing updates, 
                  and installation of your new shower system. We handle everything from start to finish.
                </p>
              </div>
              <div className="service-item">
                <h3>Custom Shower Designs</h3>
                <p>
                  Work with our design team to create a custom shower that fits your style and space. 
                  Choose from various tile options, fixtures, and layouts to create your dream shower.
                </p>
              </div>
              <div className="service-item">
                <h3>Accessibility Features</h3>
                <p>
                  We specialize in accessible shower solutions including grab bars, built-in seating, 
                  and barrier-free designs that make your bathroom safe and comfortable for all users.
                </p>
              </div>
            </div>
          </div>

          <div className="service-page-section">
            <h2>Why Choose Budget Bathroom for Your Shower Remodel?</h2>
            <ul className="benefits-list">
              <li>Industry-leading warranties on all installations</li>
              <li>Expert craftsmanship and attention to detail</li>
              <li>Quality materials and fixtures</li>
              <li>Quick, professional installation</li>
              <li>Competitive pricing and flexible payment options</li>
              <li>Fully licensed and insured</li>
            </ul>
          </div>

          <div className="service-page-cta">
            <h2>Ready to Transform Your Shower?</h2>
            <p>Contact us today for a free estimate and consultation</p>
            <button 
              className="btn btn-primary btn-large"
              onClick={() => setIsModalOpen(true)}
            >
              Request Free Estimate
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <EstimateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default ShowersPage;

