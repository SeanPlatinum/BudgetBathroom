import { useState, useEffect } from 'react';
import axios from 'axios';
import './EstimateModal.css';

const EstimateModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    service: '',
    zipcode: '',
    name: '',
    email: '',
    phone: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset form when modal closes
      setFormData({
        service: '',
        zipcode: '',
        name: '',
        email: '',
        phone: '',
        consent: false
      });
      setMessage('');
    }
  }, [isOpen]);

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
      const response = await axios.post('/api/estimate', formData);
      setMessage(response.data.message);
      setFormData({
        service: '',
        zipcode: '',
        name: '',
        email: '',
        phone: '',
        consent: false
      });
      setTimeout(() => {
        setMessage('');
        onClose();
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <h2>Request a Free Estimate</h2>
        <form className="estimate-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <select 
              name="service" 
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="shower">Shower Remodeling</option>
              <option value="bathtub">Bathtub Replacement</option>
              <option value="full">Full Bathroom Remodel</option>
            </select>
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="zipcode" 
              placeholder="Zip Code" 
              value={formData.zipcode}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group checkbox-group">
            <input 
              type="checkbox" 
              id="modalConsent" 
              name="consent" 
              checked={formData.consent}
              onChange={handleChange}
              required 
            />
            <label htmlFor="modalConsent">
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
            className="btn btn-primary btn-large"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Request Free Estimate'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EstimateModal;

