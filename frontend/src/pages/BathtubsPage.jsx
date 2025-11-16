import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EstimateModal from '../components/EstimateModal';
import './ServicePage.css';

const BathtubsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="service-page">
      <Header onRequestEstimate={() => setIsModalOpen(true)} />
      <div className="service-page-hero">
        <div className="container">
          <h1>Bathtub Replacement Services</h1>
          <p className="service-page-subtitle">Expert bathtub installation and replacement services for your bathroom renovation</p>
        </div>
      </div>
      <div className="service-page-content">
        <div className="container">
          <div className="service-page-section">
            <h2>Bath Remodeling Specialists</h2>
            <p>
              Whether you need a bathtub replacement, require increased accessibility, or simply want to 
              enhance the design of your bathroom, count on Budget Bathroom to provide everything you need. 
              Our bathtub products are scratch-resistant and triple sealed, designed to avoid cracks, chipping 
              or leaking. Plus, all products and fixtures are completely customizable to your unique needs 
              and style preferences.
            </p>
          </div>

          <div className="service-page-section">
            <h2>Our Bathtub Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Bathtub Replacement</h3>
                <p>
                  Complete bathtub replacement services including removal of your old tub, plumbing updates, 
                  and installation of your new bathtub. We ensure a perfect fit and professional finish.
                </p>
              </div>
              <div className="service-item">
                <h3>Soaking Tubs</h3>
                <p>
                  Deep, luxurious soaking tubs perfect for relaxation. Available in various sizes and styles 
                  to fit your space and design preferences.
                </p>
              </div>
              <div className="service-item">
                <h3>Walk-in Tubs</h3>
                <p>
                  Safe, accessible walk-in tubs with low thresholds and built-in seating. Perfect for 
                  those who need easier access or want added safety features.
                </p>
              </div>
              <div className="service-item">
                <h3>Custom Bath Solutions</h3>
                <p>
                  Custom-designed bathtub solutions tailored to your specific needs. From unique sizes 
                  to special features, we can create the perfect bathtub for your bathroom.
                </p>
              </div>
            </div>
          </div>

          <div className="service-page-section">
            <h2>Why Choose Budget Bathroom for Your Bathtub Replacement?</h2>
            <ul className="benefits-list">
              <li>Scratch-resistant and triple-sealed products</li>
              <li>Quick installation with minimal disruption</li>
              <li>Wide selection of styles and sizes</li>
              <li>Customizable fixtures and features</li>
              <li>Competitive pricing and payment plans</li>
              <li>Professional installation guaranteed</li>
            </ul>
          </div>

          <div className="service-page-cta">
            <h2>Ready to Upgrade Your Bathtub?</h2>
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

export default BathtubsPage;

