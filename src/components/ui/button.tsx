"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export default function Button({
  title,
  onClick,
  className = "",
  icon,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 250, damping: 12 }}
      onClick={onClick}
      className={`relative overflow-hidden px-5 py-2 rounded-md border border-titanium-mid text-titanium-light font-sans text-sm tracking-wide 
        bg-linear-to-br from-black/80 to-black/40 
        cursor-pointer
        hover:from-titanium-dark/20 hover:to-titanium-light/10 
        hover:shadow-[0_0_10px_#a9a9a933] 
        transition-all duration-300 ease-in-out ${className}`}
    >
      {/* Metallic shine sweep */}
      <span className="absolute inset-0 opacity-0 hover:opacity-100 bg-linear-to-rr from-transparent via-titanium-light/20 to-transparent translate-x-full hover:translate-x-full transition-transform duration-700 ease-in-out"></span>

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {title}
      </span>
    </motion.button>
  );
}
