


import { Button } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-lg"
    style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: "white",
      width: "100%",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
    }}
    >
      <nav className="container mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <div className="w-40 ml-10">
          <img src="/logo1.png" alt="Logo" className="w-40 h-16" />
        </div>

        {/* Centered Links for desktop */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8">
          <li>
            <Link to="/" className="hover:text-cyan-500 text-cyan-600 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-cyan-500 text-cyan-600 font-semibold">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-cyan-500 text-cyan-600 font-semibold">
              Products
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-cyan-500 text-cyan-600 font-semibold">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-cyan-500 text-cyan-600 font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-cyan-500 text-cyan-600 font-semibold">
              Contact Us
            </Link>
          </li>
        </ul>

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

        {/* Login link */}
        <div className="hidden md:block">
          <Button className="bg-cyan-600 mr-2">
          <Link to="/login" className="  text-white font-semibold">
            Login/SignUp
          </Link>
          </Button>
         
        </div>

        {/* Mobile Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-white shadow-xl space-y-4 p-4`}
        >
          <li>
            <Link to="/" className="block hover:text-cyan-500 text-cyan-600 font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="block hover:text-cyan-500 text-cyan-600 font-semibold">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="block hover:text-cyan-500 text-cyan-600 font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-cyan-500 text-cyan-600 font-semibold">
              Contact
            </Link>
          </li>

          <li>
            <Button className="bg-cyan-500 ">
            <Link to="/login" className="block hover:text-gray-400 text-white font-semibold">
              Login/SignUp
            </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
