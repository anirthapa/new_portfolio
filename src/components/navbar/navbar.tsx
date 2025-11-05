"use client";

import { navLinks } from "@/constants/navlinks";
import Button from "../ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-titanium-dark/30 flex items-center justify-between px-12 py-5"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.h1
        className="text-2xl font-display text-titanium hover:scale-105 transition-transform cursor-pointer select-none"
        whileHover={{ rotateZ: 1 }}
      >
        My<span className="text-titanium-dark">Portfolio</span>
      </motion.h1>

      {/* Navigation Links */}
      <ul className="flex items-center gap-10">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <a
              href={link.path}
              className="font-sans text-sm text-titanium-mid hover:text-titanium-light transition-colors"
            >
              {link.name}
            </a>
            {/* Metallic underline on hover */}
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-linear-to-r from-titanium-dark via-titanium-light to-titanium-dark transition-all duration-500 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div>
        <Button title="Contact Me" onClick={() => {}} />
      </div>
    </motion.nav>
  );
}
