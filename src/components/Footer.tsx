import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "/public/logo.png";

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-[#FEFEFE] text-black flex items-center justify-center border-t">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image className="" src={Logo} alt="Logo" height={30} width={30} />
          <span className="font-bold text-xl">PPSLAWARDS</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm text-gray-400">
            © 2024 Philippine Public Rervice Leadership Awards. All rights
            reserved.
          </p>
        </div>
        <nav className="mt-4 md:mt-0 flex gap-4">
          <Link
            href="/login"
            className="text-sm hover:underline underline-offset-4"
          >
            Admin Login
          </Link>
        </nav>
      </div>
    </footer>
  );
};
