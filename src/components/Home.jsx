import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Home = () => {

  const images = [
    "/images/bertastoreimage1.jpg",
    "/images/bertastoreimage2.jpg",
    "/images/bertastoreimage3.jpg",
    "/images/bertastoreimage4.jpg",
    "/images/bertastoreimage5.jpg",
    "/images/bertastoreimage6.jpg"
  ];

  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const selectedImages = getRandomImages(images);
    setRandomImages(selectedImages);
  }, []); 
  const getRandomImages = (images, count = 6) => {
    const shuffled = images.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-300 mb-8 mt-8">
          Welcome to <span className="text-pink-300">Berta</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {randomImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Clothing ${index + 1}`}
            className="h-60 w-full object-cover rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
