import React, { useState } from 'react';
import Logo from './assets/Logo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo or Image */}
                    <div className="flex items-center space-x-2">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-10 w-10 rounded-full"
                        />
                        <span className="text-xl font-bold text-white">Jayant Paithane</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="hover:text-white text-gray-100 transition">Home</a>
                        <a href="#about" className="hover:text-white text-gray-100 transition">About</a>
                        <a href="#projects" className="hover:text-white text-gray-200 transition">Projects</a>
                        <a href="#contact" className="hover:text-white text-gray-300 transition">Contact</a>
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg className="h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        

      {/* Mobile Menu */ }
    {
        isOpen && (
            <div className="md:hidden px-4 pb-4 space-y-2">
                <a href="#home" className="block hover:text-white transition">Home</a>
                <a href="#about" className="block hover:text-white transition">About</a>
                <a href="#projects" className="block hover:text-white transition">Projects</a>
                <a href="#contact" className="block hover:text-white transition">Contact</a>
            </div>
        )
    }
    </nav >
  );
}
