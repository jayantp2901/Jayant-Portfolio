import React from 'react';
import { motion } from 'framer-motion';
import certificate from "./assets/Full Stack Alma.png"
import frontendCertificate from "./assets/Frontend-alma.png"
import backendCertificate from "./assets/Backend-alma.png"

const certificates = [
    {
        title: 'Full Stack Web Developer',
        issuer: 'AlmaBetter & IIT Guwahati',
        description: 'Certified Full Stack Developer through intensive hands-on MERN stack training and project work.',
        img: certificate ,
        link: 'https://verified.sertifier.com/en/verify/46748093880165/',
    },
    {
        title: 'Frontend Development',
        issuer: 'Almabetter',

        description: 'Mastered React, Redux, Tailwind, Bootstrap, and REST APIs while building real-world responsive UIs.',
        img: frontendCertificate,
        link: 'https://verified.sertifier.com/en/verify/46394586893000/',
    },
    {
        title: 'Backend Development',
        issuer: 'Almabetter',
        description: 'Gained expertise in server-side development with Node.js, Express, MongoDB, REST APIs, and authentication systems.',
        img: backendCertificate,
        link: 'https://verified.sertifier.com/en/verify/95885026953729/',
    },
];

export default function Certificates() {
    return (
            <section id="certificates" className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-12 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto text-center"
            >
                <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-12">📜 Certificates</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={cert.img}
                                alt={cert.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5 text-left">
                                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">{cert.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{cert.description}</p>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm"
                                >
                                    🔗 View Certificate
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
