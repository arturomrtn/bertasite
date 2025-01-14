import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useRandomImages from "../hooks/useRandomImages";
import ImageGrid from "../components/ImageGrind";
import allImages from "../data/images";

const Home = () => {
  const location = useLocation();
  const { randomImages, refreshImages } = useRandomImages(allImages);

  useEffect(() => {
    if (location.pathname === "/") {
      refreshImages();
    }
  }, [location, refreshImages]);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-primary to-secondary text-white flex flex-col justify-center items-center text-center p-8"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">
        Welcome to Berta Store
      </h1>
      <ImageGrid images={randomImages} key={randomImages.map((img) => img).join("")} />
    </section>
  );
};

export default Home;

