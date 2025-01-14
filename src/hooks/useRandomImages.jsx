import { useState, useCallback, useEffect } from "react";

const useRandomImages = (images, count = 6) => {
  const [randomImages, setRandomImages] = useState([]);

  const refreshImages = useCallback(() => {
    const shuffled = images.sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, count));
  }, [images, count]);

  useEffect(() => {
    refreshImages();
  }, [refreshImages]);

  return { randomImages, refreshImages };
};

export default useRandomImages;
