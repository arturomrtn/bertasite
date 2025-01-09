import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const images = [
    "/images/bertastoreimage1.jpg",
    "/images/bertastoreimage2.jpg",
    "/images/bertastoreimage3.jpg",
    "/images/bertastoreimage4.jpg",
    "/images/bertastoreimage5.jpg",
    "/images/bertastoreimage6.jpg"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-white"
    >
      <h1 className="text-5xl font-bold mb-8 text-gray-800">
        Welcome to Berta Store
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Clothing ${index + 1}`}
            className="h-48 w-48"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;