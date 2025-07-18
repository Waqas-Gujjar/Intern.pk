import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import { IoSearch } from "react-icons/io5";
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ target, start = 0, duration = 2000 }) => {
  const [count, setCount] = useState(start);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (target - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [inView, target, start, duration]);

  return <div ref={ref}>{count.toLocaleString()}</div>;
};

const testimonials = [
  {
    name: "Mohammad Rafiq",
    location: "Larkana, Pakistan",
    image: image1,
    message: "I find internee.pk to be an outstanding place to get hands-on experience. Sometimes you have to spend time on a lot of projects.",
  },
  {
    name: "Ayesha Khan",
    location: "Karachi, Pakistan",
    image: image3,
    message: "The platform helped me grow my skills and confidence. Highly recommended for fresh learners and job seekers!",
  },
  {
    name: "Ali Hamza",
    location: "Lahore, Pakistan",
    image: image2,
    message: "Great community and valuable internships. It gave me the right direction and mentorship to excel in AI.",
  },
  {
    name: "Kashan Soomro",
    location: "Islamabad, Pakistan",
    image: image4,
    message: "Supportive mentors and a vibrant community made my internship journey memorable and productive.",
  }
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const delay = 2000;
    const animationDuration = 500;

    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setAnimate(false);
      }, animationDuration);
    }, delay + animationDuration + 2000);

    return () => clearInterval(interval);
  }, []);

  const { name, location, image, message } = testimonials[currentIndex];

  return (
    <div className="bg-[#0c0c0c] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
        <div className="lg:w-1/2">
          <div className="bg-[#1f2937] w-max px-5 py-1 rounded-full">
            <p className="text-gray-300 text font-medium">Trusted By Thousands</p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl leading-snug mt-6">
            Join a Global Community <br /> Of Learners Achieving <br /> Their Dreams
          </h1>
          <button className="mt-10 bg-[#42a824] text-white px-7 py-4 text-lg rounded-xl font-semibold hover:bg-green-700 transition cursor-pointer">
            Join Our Community
          </button>
        </div>

        <div className="w-full max-w-md relative h-[400px] overflow-hidden flex justify-center items-center">
          <div
            className={`absolute transition-all duration-500 ease-in-out w-full px-10 py-5 rounded-2xl bg-white shadow-lg text-center ${
              animate ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img
                src={image}
                alt={name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md"
              />
            </div>

            <div className="mt-12">
              <h2 className="text-black text-lg font-bold">{name}</h2>
              <p className="text-gray-600 text-sm mb-4">{location}</p>
              <p className="text-gray-700 italic text-sm mb-5">“{message}”</p>
              <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
            </div>
          </div>

          <div className="absolute bottom-0 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-green-500' : 'bg-gray-400'
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mt-28 h-full rounded-2xl mx-4 md:mx-20 bg-[#0a1733]'>
        <div className='mt-20 flex flex-col justify-center items-center'>
          <div className='bg-[#ffffff] rounded-full font-semibold flex justify-center items-center px-2 py-1 text-sm'>
            <span className='text-[#ffffff] px-4 bg-[#000000] p-1 rounded-full'>Trending</span>
            <h1 className='text-[#000000] ml-5'>Explore Internships Opportunities</h1>
          </div>
          <div className='text-white text-3xl md:text-5xl flex flex-col mt-12 items-center leading-snug text-center'>
            <h1>Unlock New Opportunities <br /> With Top-tier Internships.</h1>
            <p className='text-gray-400 text-base md:text-lg mt-10 leading-relaxed'>
              Take the first step toward a successful career with Internee.pk. Explore top internships, gain hands-on
              experience, and earn a valuable certificate.
            </p>
            <div className='flex flex-col md:flex-row gap-6 mb-20 mt-6'>
              <button className='bg-[#42a824] text-white px-6 py-2 text-lg rounded-xl font-semibold hover:bg-green-700 transition cursor-pointer'>
                Get Started Now
              </button>
              <button className='text-white px-10 border-2 py-2 text-lg rounded-xl flex items-center justify-center gap-2 font-semibold hover:text-black hover:bg-[#ffffff] transition cursor-pointer'>
                <IoSearch className='text-2xl' /> Explore Internships
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-20 mx-6 md:mx-20'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-white text-4xl md:text-6xl font-bold'>
            <AnimatedCounter target={20} start={1} />
          </h1>
          <p className='text-gray-400 text-base md:text-lg text-center'>Expert-Led Internships</p>
        </div>

        <div className="hidden md:block h-16 w-1 border-l border-gray-400"></div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-white text-4xl md:text-6xl font-bold'>
            <AnimatedCounter target={1500} start={100} />
          </h1>
          <p className='text-gray-400 text-base md:text-lg text-center'>Successful Graduates</p>
        </div>

        <div className="hidden md:block h-16 w-1 border-l border-gray-400"></div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-white text-4xl md:text-6xl font-bold'>
            <AnimatedCounter target={50000} start={1000} />
          </h1>
          <p className='text-gray-400 text-base md:text-lg text-center'>LinkedIn Followers</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
