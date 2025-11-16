import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    'Bathroom 1',
    'Bathroom 2',
    'Bathroom 3',
    'Bathroom 4'
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Our Work</h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <div className="placeholder-image">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

