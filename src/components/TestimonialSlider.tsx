'use client';
import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'These guys are exceptionally good, flexible and always on top of their game. They consistently deliver high quality, are creative in their approach and work customer-oriented.',
    author: 'Mandy van der Put',
    role: 'Project Manager at Straight-Line Leadership Int.',
  },
  {
    quote:
      'Deepnetsoft has helped us scale quickly. Their professionalism and speed have been invaluable in executing our projects.',
    author: 'John Doe',
    role: 'CTO at Acme Corp',
  },
  {
    quote:
      'Working with DNS means peace of mind. Their team is always ahead and delivers beyond expectations.',
    author: 'Jane Smith',
    role: 'CEO at InnovateX',
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const { quote, author, role } = testimonials[current];

  return (
    <div className="container w-full h-auto m-auto justify-items-center p-4 sm:p-0 mt-20">
      <div className="w-full max-w-5xl mx-auto items-center justify-items-center h-auto border rounded-2xl border-[#232323] py-10 bg-gradient-to-b from-[#0d0d0d00] to-[#0D0D0D] px-4 transition duration-500">
        <div className="flex flex-col w-full max-w-2xl px-2">
     
          <p className="text-center text-sm sm:text-2xl text-[#ABA7A7] mb-2 font-sf italic">
          <span className="inline-block align-middle font-bold text-4xl sm:text-8xl bg-gradient-to-r from-[#D4FFEC] via-[#57F2CC] to-[#4596FB] bg-clip-text text-transparent  font-sf mr-2">" </span>            The reason why I only work with DNS? Simple:
            <span className="text-white text-lg sm:text-3xl break-words block font-sf italic">“{quote}”</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full max-w-lg justify-items-center mx-auto m-auto mt-6">
          <div className="flex flex-col w-full max-w-xs px-2 items-center justify-items-center mx-auto m-auto">
            <p className="text-center text-md sm:text-lg text-[#ffffff] justify-items-center m-auto font-sf italic">
              {author}
              <span className="text-sm text-[#ABA7A7] block mt-1 font-sf italic">{role}</span>
            </p>
          </div>

          <div className="flex flex-row gap-4 mx-auto justify-items-center w-fit m-auto sm:translate-x-16">
            <button
              className="flex items-center w-6 text-white text-7xl hover:text-cyan-300 hover:scale-110"
              onClick={prevSlide}
            >
              <span>&#8249;</span>
            </button>
            <button
              className="flex items-center w-6 text-white text-7xl hover:text-cyan-300 hover:scale-110"
              onClick={nextSlide}
            >
              <span>&#8250;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
