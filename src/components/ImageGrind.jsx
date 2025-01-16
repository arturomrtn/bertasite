import { motion } from "framer-motion";

const ImageGrid = ({ images }) => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Clothing ${index + 1}`}
          className="h-60 w-full object-cover rounded-xl shadow-lg"
          whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
