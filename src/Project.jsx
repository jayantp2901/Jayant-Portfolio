import React from "react";
import { motion } from "framer-motion";
import portfolioImage from './assets/Portfolio.png';
import jobPortalImage from './assets/JobPortal.png';
import HotelSiteImage from './assets/HotelSite.png'

const projects = [
  {
    date: "July 2025",
    title: "Personal Portfolio",
    description:
      "A responsive, animated portfolio to showcase my skills, projects, and experience using modern tools.",
    features: [
      "Framer Motion animations & dark mode support",
      "Responsive layout with Tailwind CSS",
      "Dedicated project and about-me sections",
    ],
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: portfolioImage,
    liveLink: "https://jayant-portfolio.vercel.app/",
    codeLink: "https://github.com/jayantp2901/Jayant-Portfolio",
  },
  {
    date: "April 2025",
    title: "JobHunt - Online Job Portal",
    description:
      "A feature-rich career platform with resume parsing, referrals, and role-based job interaction.",
    features: [
      "User roles (Recruiter & Job Seeker)",
      "Resume parser, referral system, and job tracking",
      "Chatbot integration using Gemini/OpenAI",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary"],
    image: jobPortalImage,
    liveLink: "https://yourdomain.com/job-portal",
    codeLink: "https://github.com/jayantp2901/Job-Portal-Frontend",
  },
  {
    date: "Nov 2024",
    title: "VistaraStay - Hotel Booking Website",
    description:
      "A MERN-based full-stack hotel booking platform with real-time availability and admin controls.",
    features: [
      "Hotel listings, booking calendar, and search filters",
      "Admin dashboard for managing rooms and reservations",
      "JWT authentication and MongoDB data handling",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: HotelSiteImage,
    liveLink: "https://vistarastay.netlify.app/",
    codeLink: "https://github.com/jayantp2901/VistaraStay",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-blue-900 dark:text-white mb-16"
      >
        🚀 My Projects
      </motion.h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2" />

        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row items-center gap-10 mb-24 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10" />

            {/* Image & Buttons */}
            <motion.div
              className="w-full md:w-1/2 text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-52 sm:h-64 object-cover rounded-xl shadow-lg border border-blue-100 dark:border-blue-800"
              />
              <div className="flex gap-4 mt-6 justify-center flex-wrap">
                <a
                  href={proj.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-200"
                >
                  🌐 Live Demo
                </a>
                <a
                  href={proj.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-900 transition duration-200"
                >
                  💻 Source Code
                </a>
              </div>
            </motion.div>

            {/* Project Info */}
            <div className="w-full md:w-1/2">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {proj.date}
              </p>
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-white mb-3">
                {proj.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {proj.description}
              </p>

              <div className="mb-4">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Features:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-1">
                  {proj.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
