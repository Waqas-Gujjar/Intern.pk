import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../../assets/images/cloud1.png';
import image2 from '../../assets/images/collab2.png';
import image3 from '../../assets/images/collob3.png';
import image4 from '../../assets/images/collob4.png';
import image5 from '../../assets/images/collob5.png';
import image6 from '../../assets/images/collob6.png';

const imageList = [image1, image2, image3, image4, image5, image6];

// Animation container with stagger
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // smooth delay between each image
    },
  },
};

// Each image animation
const imageVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Collaborated = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-10 text-gray-400 text-xl bg-black">
        <p>Collaborated with Trusted Worldwide Partners</p>
      </div>

      <motion.div
        className="flex justify-center items-center pt-6 gap-20 flex-wrap bg-black overflow-x-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {imageList.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Partner ${index + 1}`}
            className="w-[8rem] h-auto object-contain"
            custom={index}
            variants={imageVariants}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Collaborated;
