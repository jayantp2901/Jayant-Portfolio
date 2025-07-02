import React from 'react';
import { FaLinkedin, FaFileAlt, FaUserCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      id="home"
      style={{ backgroundImage: `url(/herobg.png)` }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center max-w-2xl mx-4 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Jayant</h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A passionate and results-driven <span className='text-white'>Full Stack Web Developer</span> with a strong foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js). I love building responsive, scalable, and user-focused web applications that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold text-white transition flex items-center gap-2"
          >
            <FaUserCircle /> Know More
          </a>

          <a
            href="https://www.linkedin.com/in/jayant-paithane/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full font-semibold text-white transition flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="/Jayant_Resume.pdf"
            download
            className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-full font-semibold text-white transition flex items-center gap-2"
          >
            <FaFileAlt /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}
