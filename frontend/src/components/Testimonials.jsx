import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      stars: 5,
      text: "The crew came out and worked hard! They cleaned up after themselves and made sure that we were satisfied before they left. We got a total bathroom remodel and our home is even more beautiful now!",
      author: "Sarah M."
    },
    {
      stars: 5,
      text: "I would definitely recommend this company! The efficient fixtures will save me money in the long run. This is my first time using Budget Bathroom and I'm pleased!",
      author: "Michael T."
    },
    {
      stars: 5,
      text: "They did really professional, helpful work, and they took their time to do a quality job. Our new walk-in shower is exactly what we wanted!",
      author: "Jennifer L."
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {'★'.repeat(testimonial.stars)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

