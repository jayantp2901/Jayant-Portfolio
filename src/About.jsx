import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12  min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Side - Profile & Degree */}
        {/* <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">👋 About Me</h2>

          <p className="md:hidden text-gray-700 dark:text-gray-300 text-base mt-6 bg-blue-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            👋 Hi, I'm Jayant — a MERN stack developer with strong project experience. I build responsive, real-world apps with clean code and creative problem solving.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            I have completed my B.E. in Computer Engineering from <span className="font-semibold">Dhole Patil College of Engineering, Pune</span>. I have honed both my technical skills and collaborative mindset through hands-on project development, including a dynamic job portal with resume parsing, referral systems, and chatbot integration.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
            I'm not just passionate about writing clean and maintainable code — I’m driven by the impact it can create. Whether it's developing responsive frontends with <span className="font-semibold">React</span>, managing state with <span className="font-semibold">Redux</span>, or designing RESTful APIs with <span className="font-semibold">Node.js & Express</span>, I enjoy solving problems that matter.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Beyond code, I value continuous learning, collaboration, and adaptability — essential qualities in today’s ever-evolving tech landscape. My goal is simple: to build meaningful products and become a developer who never stops growing.
          </p>
        </div> */}

        <div className="flex-1 text-center md:text-left">
  <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">👋 About Me</h2>

  <p className="md:hidden text-gray-700 dark:text-gray-300 text-base mt-6 bg-blue-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
    👋 Hi, I'm Jayant — a MERN stack developer with strong project experience. I build responsive, real-world apps with clean code and creative problem solving.
  </p>

  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
    I have completed my B.E. in Computer Engineering from <span className="font-semibold">Dhole Patil College of Engineering, Pune</span>. I'm also a certified <span className="font-semibold text-blue-700 dark:text-blue-400">Full Stack Web Developer</span> through <span className="font-semibold text-blue-700 dark:text-blue-400">AlmaBetter</span> in collaboration with <span className="font-semibold text-blue-700 dark:text-blue-400">IIT Guwahati</span> 🏅 — where I sharpened my skills across the MERN stack through rigorous hands-on training.
  </p>

  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
    I'm not just passionate about writing clean and maintainable code — I’m driven by the impact it can create. Whether it's developing responsive frontends with <span className="font-semibold">React</span>, managing state with <span className="font-semibold">Redux</span>, or designing RESTful APIs with <span className="font-semibold">Node.js & Express</span>, I enjoy solving problems that matter.
  </p>

  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
    Beyond code, I value continuous learning, collaboration, and adaptability — essential qualities in today’s ever-evolving tech landscape. My goal is simple: to build meaningful products and become a developer who never stops growing.
  </p>

  {/* 🎓 Certificate Badge */}
  <a href="#certificates"><div className="mt-6 inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300">
    🎓 Certified Full Stack Web Developer – AlmaBetter x IIT Guwahati
  </div></a>
</div>


        {/* Right Side - Skills Cloud */}
        <div className="flex-1">
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-4">🛠️ Tech Stack & Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'React.js', 'Node.js', 'MongoDB', 'Express.js',
                'Tailwind CSS', 'Redux', 'JWT Auth',
                'JavaScript', 'Java', 'Python', 'REST APIs', 'Git', 'Github', 'Postman'
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
