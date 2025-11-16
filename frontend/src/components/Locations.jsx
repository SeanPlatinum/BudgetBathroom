import './Locations.css';

const Locations = () => {
  const locations = [
    {
      state: 'Connecticut',
      address: '123 Main Street',
      city: 'Hartford, CT 06103',
      phone: '(860) 555-1234'
    },
    {
      state: 'Massachusetts',
      address: '456 Oak Avenue',
      city: 'Boston, MA 02101',
      phone: '(617) 555-5678'
    },
    {
      state: 'New York',
      address: '789 Elm Street',
      city: 'New York, NY 10001',
      phone: '(212) 555-9012'
    },
    {
      state: 'New Jersey',
      address: '321 Pine Road',
      city: 'Newark, NJ 07102',
      phone: '(973) 555-3456'
    }
  ];

  return (
    <section id="locations" className="locations">
      <div className="container">
        <h2>Service Areas</h2>
        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-item">
              <h3>{location.state}</h3>
              <p>{location.address}</p>
              <p>{location.city}</p>
              <p>{location.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;

