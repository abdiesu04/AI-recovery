// components/TestimonialCarousel.js
import React from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const testimonials = [
  {
    quote: "I can actually see progress in my mental health which is something I haven't been able to say in 15 years and it's thanks to her.",
    author: "S.A.",
    therapist: "Virginia Truglio (LCSW, MSW)",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: "The sessions have been incredibly helpful. My therapist really understands my needs and provides great advice.",
    author: "J.D.",
    therapist: "Michael Smith (LCSW, MSW)",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    quote: "I feel much more in control of my life now. The support has been amazing and I couldn't be happier.",
    author: "L.M.",
    therapist: "Sara Johnson (LCSW, MSW)",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    quote: "My mental health has improved significantly. I can't thank my therapist enough for their guidance.",
    author: "P.K.",
    therapist: "David Lee (LCSW, MSW)",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    quote: "I've made so much progress in such a short time. The personalized approach has been a game changer.",
    author: "A.B.",
    therapist: "Emily Davis (LCSW, MSW)",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = React.useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="bg-beige text-center p-8 relative">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handlePrev}>
        <ArrowBackIos className="text-green-700" />
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleNext}>
        <ArrowForwardIos className="text-green-700" />
      </div>
      <div className="text-green-700 text-3xl mb-4">“</div>
      <p className="text-xl font-light mb-4">{testimonials[current].quote}</p>
      <div className="flex items-center justify-center mb-4">
        <img src={testimonials[current].image} alt="Author" className="rounded-full w-12 h-12 mr-2" />
        <div className="text-left">
          <p className="text-sm">Written by {testimonials[current].author} for {testimonials[current].therapist}</p>
        </div>
      </div>
      <div className="flex justify-center">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === current ? 'bg-green-700' : 'bg-gray-300'}`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 border border-green-700 text-green-700 rounded-full hover:bg-green-700 hover:text-white transition-colors">
        More success stories
      </button>
    </div>
  );
};

export default TestimonialCarousel;
