"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Logo from "/public/logo.png";
import { usePathname } from "next/navigation";

// Updated navItems with subcategories
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "#",
    label: "Awardees",
    subcategories: [
      { href: "/awardees", label: "Awardees" },
      { href: "/gallery", label: "Photo Gallery" },
    ],
  },
  {
    href: "#",
    label: "Criteria",
    subcategories: [
      { href: "/eligibility", label: "Eligibility" },
      { href: "/selection-process", label: "Selection Process" },
      { href: "/categories", label: "Award Categories" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-colors duration-300 flex justify-center items-center max-md:block">
      <div className="container flex h-20 items-center justify-between ">
        <Link href="/" className="flex items-center gap-3 md:gap-2 max-md:ml-6">
          <Image
            src={Logo || "/placeholder.svg"}
            alt="PPSLAWARDS Logo"
            height={50}
            width={50}
            className="h-12 w-12"
          />
          <span className="font-bold text-2xl md:text-xl tracking-wide text-black dark:text-gray-200">
            PPSL<span className="text-yellow-500">AWARDS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              {item.subcategories ? (
                <div className="flex flex-col">
                  <button
                    className={`flex items-center px-4 py-3 text-base font-medium transition-colors hover:text-yellow-500 ${
                      pathname.startsWith(item.href)
                        ? "text-yellow-500"
                        : "text-gray-600"
                    }`}
                    onClick={() => toggleDropdown(item.label)}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  <AnimatePresence>
                    {(openDropdown === item.label || true) && (
                      <div
                        className="absolute top-full left-0 hidden group-hover:block z-50 min-w-[200px]"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="py-2 mt-1 bg-white shadow-lg rounded-md border"
                        >
                          {item.subcategories.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-yellow-500 ${
                                pathname === subItem.href
                                  ? "text-yellow-500"
                                  : "text-gray-600"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
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
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <button
          className="max-md:block hidden text-gray-600 hover:text-yellow-500 transition-colors max-md:mr-6"
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
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <div key={item.href} className="flex flex-col">
                  {item.subcategories ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex items-center justify-between px-6 py-3 text-base font-medium transition-colors hover:text-yellow-500 ${
                          pathname.startsWith(item.href)
                            ? "text-yellow-500"
                            : "text-gray-600"
                        }`}
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === item.label ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-50"
                          >
                            {item.subcategories.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-8 py-2 text-sm transition-colors hover:text-yellow-500 ${
                                  pathname === subItem.href
                                    ? "text-yellow-500"
                                    : "text-gray-600"
                                }`}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-6 py-3 text-base font-medium transition-colors hover:text-yellow-500 ${
                        pathname === item.href
                          ? "text-yellow-500"
                          : "text-gray-600"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
