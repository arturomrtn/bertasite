import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r bg-pink-300 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <Link
              to="/"
              className="text-3xl font-extrabold text-white tracking-wide"
            >
              Berta
            </Link>
        <ul className="flex space-x-8 text-lg font-medium text-white">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition duration-300"
            >
              About Us
            </Link>
            </li>
            <li>
            <Link
              to="/brands"
              className="hover:text-yellow-300 transition duration-300"
            >
              Brands
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
