import { motion } from "framer-motion";

const Hero = () => {
  const images = [
    "/images/bertastoreimage1.jpg",
    "/images/bertastoreimage2.jpg",
    "/images/bertastoreimage3.jpg",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="grid grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Clothing ${index + 1}`}
            className="rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;