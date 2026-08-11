import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calculator } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Community", path: "/clients" },
    { name: "Governance", path: "/governance" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-outline-variant sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 max-w-container-max mx-auto w-full gap-4 min-h-[200px]">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center shrink-0 group">
          <img
            src="/MJP-Logo-transparent.png"
            alt="MJP Society Accounts & Consultancy"
            width="200"
            height="200"
            className="h-[200px] w-auto max-w-[200px] sm:max-w-[800px] object-contain hover:opacity-95 transition-opacity duration-200"
          />
        </Link>

        {/* Desktop Navigation Links & Action Button Grouped on Right */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8 ml-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold whitespace-nowrap transition-all ${isActive
                  ? "text-primary border-b-2 border-tertiary pb-1 font-bold"
                  : "text-secondary hover:text-primary transition-colors"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm active:scale-95 whitespace-nowrap ml-2 lg:ml-4"
          >
            <Calculator size={16} className="text-white" />
            <span className="text-white">Get a Proposal</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-outline-variant bg-white overflow-hidden shadow-lg"
          >
            <div className="flex flex-col px-margin-mobile py-6 gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-semibold py-2 transition-colors border-b border-outline-variant/30 ${isActive ? "text-tertiary font-bold" : "text-secondary hover:text-primary"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full py-3 bg-primary text-white text-center font-bold rounded-lg shadow-sm"
              >
                Request Proposal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

