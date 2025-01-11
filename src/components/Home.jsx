const Home = () => {

  const images = [
    "/images/bertastoreimage1.jpg",
    "/images/bertastoreimage2.jpg",
    "/images/bertastoreimage3.jpg",
    "/images/bertastoreimage4.jpg",
    "/images/bertastoreimage5.jpg",
    "/images/bertastoreimage6.jpg"
  ];

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to <span className="text-blue-500">Berta</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Clothing ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
