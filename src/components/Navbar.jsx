import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 h-20 px-8 w-full bg-pink-300 shadow-2xl z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 mt-3">
      <Link
              to="/"
              className="absolute left-6 text-3xl font-extrabold text-white tracking-wide ml-2"
            >
              Berta
            </Link>
        <ul className="flex justify-center w-full space-x-12 text-lg font-medium text-white">
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
              About
            </Link>
            </li>
            <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
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
