import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oy9JYKLkepGnTWvTdUV7qGVwNbzvUqE1Bg&s"
            alt=""
            className="w-32 h-12 object-contain"
          />
        </div>

        {/* Menu button for small screens */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Links for desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-white shadow-xl space-y-4 p-4`}
        >
          <li>
            <Link to="/" className="block hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="block hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="block hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/" className="block hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
