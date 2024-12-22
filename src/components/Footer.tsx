import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "/public/logo.png";

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-900 text-gray-50 flex items-center justify-center">
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
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};
