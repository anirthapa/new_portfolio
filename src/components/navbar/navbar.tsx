"use client";

import { navLinks } from "@/constants/navlinks";
import Button from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
      <ul className="md:flex items-center gap-10 hidden ">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group cursor-pointer">
            <span className="font-sans text-sm text-titanium-mid hover:text-titanium-light transition-colors">
              {link.name}
            </span>
            {/* Metallic underline on hover */}
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-linear-to-r from-titanium-dark via-titanium-light to-titanium-dark transition-all duration-500 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div className="hidden md:flex">
        <Button title="Contact Me" onClick={() => {}} />
      </div>

      {/* Ham Burger Icon */}
      <div
        className="flex text-titanium-light md:hidden "
        onClick={() => setIsOpen(!isOpen)}
      >
        <ListIcon size={24} className="" />
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-6 pt-24 absolute h-screen top-0 right-0 w-2/4 bg-black flex flex-col items-center justify-start text-titanium-light"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <XIcon
              size={32}
              className="absolute top-4 right-10"
              onClick={() => setIsOpen(false)}
            />

            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <span className="font-sans text-lg hover:text-titanium">
                    {link.name}
                  </span>
                  {/* Metallic underline on hover */}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-linear-to-r from-titanium-dark via-titanium-light to-titanium-dark transition-all duration-500 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button title="Contact Me" onClick={() => {}} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
