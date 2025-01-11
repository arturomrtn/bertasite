const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center p-8"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          We are a clothing store that specializes in trendy and timeless
          fashion. Our goal is to provide our customers with the best quality
          products and an amazing shopping experience.
        </p>
        <p className="text-sm sm:text-base text-gray-500">
          Founded with the mission to bring stylish clothing to everyone. Our
          team is passionate about fashion and aims to make every piece we offer
          stand out. We strive for excellence, and customer satisfaction is our
          top priority.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;