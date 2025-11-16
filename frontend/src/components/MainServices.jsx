import { Link } from 'react-router-dom';
import './MainServices.css';

const MainServices = () => {
  return (
    <section id="services" className="main-services">
      <div className="container">
        <div className="services-content">
          <div className="service-detail">
            <div className="service-image">
              <img 
                src="/steven-ungermann-Aac7IlKnYX8-unsplash.jpg" 
                alt="Shower remodeling services"
                className="service-img"
              />
            </div>
            <div className="service-text">
              <h2>Shower Remodeling</h2>
              <p>
                With years of bathroom remodeling experience, Budget Bathroom builds trust and 
                peace of mind into every shower installation. Our highly-skilled experts provide 
                shower replacement services for a variety of styles, from modern walk-in showers 
                to luxurious spa-like designs. We offer comprehensive warranties on all shower 
                replacements.
              </p>
              <Link to="/showers" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="service-detail reverse">
            <div className="service-image">
              <img 
                src="/jared-rice-PibraWHb4h8-unsplash.jpg" 
                alt="Bathtub replacement services"
                className="service-img"
              />
            </div>
            <div className="service-text">
              <h2>Bathtub Replacement</h2>
              <p>
                Whether you need a bathtub replacement, require increased accessibility, or simply 
                want to enhance the design of your bathroom, count on Budget Bathroom to provide 
                everything you need. Our bathtub products are scratch-resistant and triple sealed, 
                designed to avoid cracks, chipping or leaking. Plus, all products and fixtures are 
                completely customizable to your unique needs and style preferences.
              </p>
              <Link to="/bathtubs" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;

