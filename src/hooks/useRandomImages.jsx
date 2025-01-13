import { useState, useEffect } from "react";

const useRandomImages = (images, count = 6) => {
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const getRandomImages = () => {
      const shuffled = images.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    setRandomImages(getRandomImages());
  }, [images, count]);

  return randomImages;
};

export default useRandomImages;