import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-200/80 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-white">Ascent Club</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/events" className="nav-link">Events</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/panel-members" className="nav-link">Panel Members</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-dark-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" className="nav-link block" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link block" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/events" className="nav-link block" onClick={() => setIsOpen(false)}>
              Events
            </NavLink>
            <NavLink to="/projects" className="nav-link block" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/panel-members" className="nav-link block" onClick={() => setIsOpen(false)}>
              Panel Members
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;