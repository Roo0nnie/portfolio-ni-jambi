"use client";

import React from "react";
import Link from "next/link";
import { Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#580a0b] text-white border-t border-[#d4af37]/30 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">

          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#f3e5ab] flex items-center justify-center text-[#580a0b] font-serif font-bold text-lg shadow-md">
                BU
              </div>
              <div>
                <h3 className="font-serif text-lg tracking-wide font-bold text-[#f3e5ab]">
                  Bicol University
                </h3>
                <p className="text-xs text-white/80">Gubat Campus</p>
              </div>
            </div>
            <p className="text-sm text-white/80 max-w-md leading-relaxed">
              M.A.K.A Project — Made to Aspire Kabataan in Adhering to the Filipino Core Values. Supporting the National Service Training Program (Literacy Training Service).
            </p>
            <div className="pt-2 flex space-x-4">
              {/* Custom SVG Facebook Icon */}
              <a
                id="footer-social-fb"
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-[#580a0b] flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Custom SVG Twitter Icon */}
              <a
                id="footer-social-tw"
                href="#twitter"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-[#580a0b] flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.999-7.496 13.999-13.985 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
              {/* Custom SVG Instagram Icon */}
              <a
                id="footer-social-ig"
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-[#580a0b] flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                id="footer-social-mail"
                href="mailto:contact@bicol-u.edu.ph"
                aria-label="Email Contact"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-[#580a0b] flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#d4af37] uppercase">
              Core Values
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link id="footer-link-diyos" href="/maka-diyos" className="hover:text-[#d4af37] transition-colors">
                  Maka-Diyos
                </Link>
              </li>
              <li>
                <Link id="footer-link-tao" href="/maka-tao" className="hover:text-[#d4af37] transition-colors">
                  Maka-Tao
                </Link>
              </li>
              <li>
                <Link id="footer-link-kalikasan" href="/maka-kalikasan" className="hover:text-[#d4af37] transition-colors">
                  Maka-Kalikasan
                </Link>
              </li>
              <li>
                <Link id="footer-link-bansa" href="/maka-bansa" className="hover:text-[#d4af37] transition-colors">
                  Maka-Bansa
                </Link>
              </li>
            </ul>
          </div>

          {/* Portfolio Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#d4af37] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link id="footer-link-home" href="/" className="hover:text-[#d4af37] transition-colors">
                  Home / Overview
                </Link>
              </li>
              <li>
                <Link id="footer-link-ack" href="/acknowledgement" className="hover:text-[#d4af37] transition-colors">
                  Acknowledgement
                </Link>
              </li>
              <li>
                <Link id="footer-link-kickoff" href="/kickoff" className="hover:text-[#d4af37] transition-colors">
                  Kick Off Event
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 space-y-4 sm:space-y-0">
          <p>© {currentYear} Bicol University Gubat Campus. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Designed with</span>
            <Heart className="w-3 h-3 text-[#d4af37] fill-[#d4af37] mx-1 animate-pulse" />
            <span>for the M.A.K.A Project</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
