import { useState } from 'react';
import axios from 'axios';
import './Hero.css';

const Hero = ({ onRequestEstimate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipcode: '',
    product: 'showers',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await axios.post('/api/estimate', {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`,
        service: formData.product
      });
      setMessage(response.data.message);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipcode: '',
        product: 'showers',
        consent: false
      });
      setTimeout(() => {
        setMessage('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-form-panel">
          <h2 className="hero-title">isn't it time YOU...</h2>
          <h1 className="hero-main-title">GOT A BUDGET BATHROOM</h1>
          <form className="estimate-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="First Name" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Last Name" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="zipcode" 
                placeholder="Zipcode" 
                value={formData.zipcode}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="promo-link">
              <a href="#promo">Add Promotional Code</a>
            </div>
            <div className="product-selection">
              <label className="product-label">WHICH BUDGET BATHROOM PRODUCT?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="product" 
                    value="showers"
                    checked={formData.product === 'showers'}
                    onChange={handleChange}
                    required
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">Showers</span>
                </label>
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="product" 
                    value="bathtubs"
                    checked={formData.product === 'bathtubs'}
                    onChange={handleChange}
                    required
                  />
                  <span className="radio-custom"></span>
                  <span className="radio-text">Bathtubs</span>
                </label>
              </div>
            </div>
            <div className="form-group checkbox-group">
              <input 
                type="checkbox" 
                id="consent" 
                name="consent" 
                checked={formData.consent}
                onChange={handleChange}
                required 
              />
              <label htmlFor="consent">
                I consent to providing my information for the purposes of processing my inquiry.
              </label>
            </div>
            {message && (
              <div className={`form-message ${message.includes('Thank you') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SUBMITTING...' : 'REQUEST A FREE ESTIMATE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

