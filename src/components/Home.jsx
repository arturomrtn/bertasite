import allImages from "../data/images";
import useRandomImages from "../hooks/useRandomImages";
import ImageGrid from "../components/ImageGrind";

const Home = () => {

  const randomImages = useRandomImages(allImages);
  
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-primary to-secondary text-white flex flex-col justify-center items-center text-center p-8"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">
        Welcome to Berta Store
      </h1>
      <ImageGrid images={randomImages} />
    </section>
  );
};

export default Home;
