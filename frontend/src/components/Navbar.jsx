import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Used for logo animation and mobile menu
import logo from "../assets/media-logo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants for logo reveal
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-900/95 py-4 shadow-lg" : "bg-transparent py-"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 z-50">
          <img
            src={logo}
            alt="logo"
            className="h-[65px] w-[65px] object-contain"
          />
          <motion.span
            className="font-bold text-xl  md:text-2xl"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            {Array.from("Mavryk").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 mr-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium text-sm uppercase tracking-wide transition-all ${
                  isActive
                    ? "text-purple-500"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="https://cal.com/shubham-das-2fzvdb/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full text-sm font-medium uppercase tracking-wide transition-all transform hover:scale-105"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed inset-0 bg-zinc-900 z-40 flex flex-col pt-24 px-4 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium text-lg py-3 border-b border-zinc-800 ${
                  isActive ? "text-purple-500" : "text-white/80"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="https://cal.com/shubham-das-2fzvdb/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-center font-medium mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
