import { Button } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/aboutUs", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/blogs", label: "Blogs" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header
      className="shadow-lg"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
        width: "100%",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav className="container mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <div className="w-40 ml-10">
          <Link to={"/"}>
            <img src="/logo1.png" alt="Logo" className="w-40 h-16" />
          </Link>
        </div>

        {/* Centered Links for desktop */}
        <ul className="hidden md:flex flex-grow justify-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="font-serif  text-cyan-600  hover:text-cyan-500 font-semibold"
              >
                {link.label}
              </Link>
            </li>
          ))}
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

        {/* Login link for desktop */}
        <div className="hidden md:block">
          {token ? (
            <Button
              className="bg-cyan-600 hover:bg-cyan-500 mr-2 text-white font-serif"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button className="bg-cyan-600 hover:bg-cyan-500 mr-2 text-white font-serif ">Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={toggleMenu}
          ></div>
        )}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-white shadow-xl space-y-4 p-4 z-50`}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block hover:text-cyan-500 text-cyan-600 font-semibold"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/login" onClick={toggleMenu}>
              <Button className="bg-cyan-600 hover:bg-cyan-500 w-full text-white ">
                LogOut
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
