"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define nav links with unique testing IDs
  const navLinks = [
    { name: "Home", href: "/", isHash: false, id: "nav-home" },
    { name: "Student Profile", href: pathname === "/" ? "#profile" : "/#profile", isHash: true, id: "nav-profile" },
    { name: "Preface", href: pathname === "/" ? "#preface" : "/#preface", isHash: true, id: "nav-preface" },
    { name: "Acknowledgement", href: "/acknowledgement", isHash: false, id: "nav-ack" },
    { name: "Kick Off", href: "/kickoff", isHash: false, id: "nav-kickoff" },
    { name: "Maka-Diyos", href: "/maka-diyos", isHash: false, id: "nav-diyos" },
    { name: "Maka-Tao", href: "/maka-tao", isHash: false, id: "nav-tao" },
    { name: "Maka-Kalikasan", href: "/maka-kalikasan", isHash: false, id: "nav-kalikasan" },
    { name: "Maka-Bansa", href: "/maka-bansa", isHash: false, id: "nav-bansa" },
    { name: "Culminating", href: "/culminating", isHash: false, id: "nav-culminating" },
    { name: "Preparation for Completion and Graduation", href: "/preparation-completion-graduation", isHash: false, id: "nav-prep" },
    { name: "Assisting Students", href: "/assisting-students", isHash: false, id: "nav-assisting" },
    { name: "Garden", href: "/garden", isHash: false, id: "nav-garden" },
  ];

  const isActive = (href: string, isHash: boolean) => {
    if (isHash) {
      // Simple visual handling for hash links if on base path
      return false;
    }
    return pathname === href;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#7b1113]/95 backdrop-blur-md shadow-lg border-b border-[#d4af37]/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link
            id="navbar-brand-logo"
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3e5ab] flex items-center justify-center text-[#580a0b] shadow-md transition-transform duration-300 group-hover:scale-105">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wide text-white group-hover:text-[#f3e5ab] transition-colors">
                M.A.K.A.
              </span>
              <span className="text-[10px] text-white/80 tracking-widest uppercase block -mt-1">
                E-Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.isHash);
              return (
                <Link
                  key={link.name}
                  id={link.id}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 group ${
                    active
                      ? "text-[#f3e5ab]"
                      : scrolled
                      ? "text-white/90 hover:text-[#f3e5ab]"
                      : "text-white hover:text-[#f3e5ab]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-1 left-3 right-3 h-[2px] bg-[#d4af37] transform origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-md text-white hover:text-[#f3e5ab] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#580a0b] border-b border-[#d4af37]/30 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navLinks.map((link) => {
                const active = isActive(link.href, link.isHash);
                return (
                  <Link
                    key={link.name}
                    id={`${link.id}-mobile`}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                      active
                        ? "bg-[#7b1113] text-[#f3e5ab] font-semibold border-l-4 border-[#d4af37]"
                        : "text-white/90 hover:bg-white/5 hover:text-[#f3e5ab]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
