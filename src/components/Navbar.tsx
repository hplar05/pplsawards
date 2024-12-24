"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "/public/logo.png";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/criteria", label: "Criteria" },
  { href: "/awardees", label: "Awardees" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname(); // Get the current pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-colors duration-300 flex justify-center items-center max-md:block">
      <div className="container flex h-20 items-center justify-between ">
        <Link href="/" className="flex items-center space-x-2 max-md:ml-6">
          <Image className="" src={Logo} alt="Logo" height={50} width={50} />
          <span className="font-bold text-2xl max-md:text-lg">PPSLAWARDS</span>
        </Link>
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-3 text-base font-medium transition-colors hover:text-yellow-500 ${
                pathname === item.href ? "text-yellow-500" : "text-gray-600"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-gray-600 hover:text-yellow-500 transition-colors max-md:mr-6"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col py-4 space-y-2">
              {" "}
              {/* Added space-y-2 for better vertical spacing */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-3 text-base font-medium transition-colors hover:text-yellow-500 ${
                    pathname === item.href ? "text-yellow-500" : "text-gray-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
