import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-6 border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        {/* Social Media Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/jayantpaithane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jayantpaithane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:jayantpaithane111@gmail.com"
            className="hover:text-red-500 dark:hover:text-white transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 dark:hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Made with <span className="text-red-500">❤️</span> by Jayant Paithane
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
