
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent top-0 left-0 relative z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
      
        <Link href="/" className="font-lrg">
          emma
        </Link>

      
        <nav className="hidden md:flex space-x-8 font-mdm">
          <Link href="#" className="hover:text-gray-900 transition">Home</Link>
          <Link href="#" className="hover:text-gray-900 transition">Features</Link>
          <Link href="#" className="hover:text-gray-900 transition">Screenshot</Link>
          <Link href="#" className="hover:text-gray-900 transition">Pricing</Link>
          <Link href="#" className="hover:text-gray-900 transition">Contact</Link>
        </nav>

       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-300 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-gray-600 shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4 font-mdm">
            <Link href="#" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Features</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Screenshot</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="#" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
