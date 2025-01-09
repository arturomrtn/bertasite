import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-20 bg-gray-900 flex flex-col items-center py-6 space-y-8 shadow-xl z-20">
      <div className="text-white text-xl font-bold mb-8">
        <span className="block w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl">
          CS
        </span>
      </div>

      <ul className="flex flex-col space-y-6">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white transition duration-300"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="brands"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Brands
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;