
import { useState } from 'react';
import reviews from './data';
import './testimonials.css';

function Testimonials() {
  const [data, setData] = useState(reviews);
  const [cnt, setCnt] = useState(0);

  const nextTestimonial = () => {
    setCnt((prevCnt) => (prevCnt + 1) % data.length);
  };

  const prevTestimonial = () => {
    setCnt((prevCnt) => (prevCnt - 1 + data.length) % data.length);
  };

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCnt(randomIndex);
  };

  return (
    <div className="testimonials-container">
      <div className="testimonial-card">
        
        <img src={data[cnt].image} alt='img' />
        <div className="testimonial-name">{data[cnt].name}</div>
        <div className="testimonial-job">{data[cnt].job}</div>
        <p className="testimonial-text">"{data[cnt].text}"</p>
        <div className="navigation-buttons">
          <div className='btn'><button onClick={prevTestimonial}>&lt;</button>
          <button onClick={nextTestimonial}>&gt;</button></div>
           <br></br>
          <div className='btn'> <button onClick={surpriseMe}>Surprise Me</button></div>
         
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
