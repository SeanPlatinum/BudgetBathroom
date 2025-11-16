import { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const carouselRef = useRef(null);

  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'The crew came out and worked hard! They cleaned up after themselves and made sure that we were satisfied before they left. We got a total bathroom remodel and our home is even more beautiful now!',
      date: '2 weeks ago'
    },
    {
      name: 'Michael T.',
      rating: 5,
      text: 'I would definitely recommend this company! The efficient fixtures will save me money in the long run. This is my first time using Budget Bathroom and I\'m pleased!',
      date: '1 month ago'
    },
    {
      name: 'Jennifer L.',
      rating: 5,
      text: 'They did really professional, helpful work, and they took their time to do a quality job. Our new walk-in shower is exactly what we wanted!',
      date: '3 weeks ago'
    },
    {
      name: 'David R.',
      rating: 5,
      text: 'Excellent service from start to finish. The team was professional, on time, and the bathroom looks amazing. Highly recommend Budget Bathroom!',
      date: '1 week ago'
    },
    {
      name: 'Lisa K.',
      rating: 5,
      text: 'We had our bathtub replaced and couldn\'t be happier. The installation was quick and the quality is outstanding. Great value for the price!',
      date: '2 months ago'
    },
    {
      name: 'Robert P.',
      rating: 5,
      text: 'Budget Bathroom transformed our outdated bathroom into a modern oasis. The attention to detail and customer service was exceptional throughout the entire process.',
      date: '1 month ago'
    }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      carousel.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="features">
      <div className="container">
        <h2>Google Reviews</h2>
        <div className="reviews-carousel-container">
          <div className="reviews-carousel" ref={carouselRef}>
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div className="reviewer-details">
                      <div className="reviewer-name">{review.name}</div>
                      <div className="review-date">{review.date}</div>
                    </div>
                  </div>
                  <div className="review-rating">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
                <div className="review-text">{review.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

