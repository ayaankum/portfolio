'use client'

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const projects = [
  {
    imgSrc: "/dummy.jpg",
    name: "Project One",
    description: "This is a description for project one.",
    githubLink: "https://github.com/username/project-one",
    width: 1200,
    height: 800,
  },
  {
    imgSrc: "/dummy.jpg",
    name: "Project Two",
    description: "This is a description for project two.",
    githubLink: "https://github.com/username/project-two",
    width: 1200,
    height: 800,
  },
  {
    imgSrc: "/dummy.jpg",
    name: "Project Two",
    description: "This is a description for project two.",
    githubLink: "https://github.com/username/project-two",
    width: 1200,
    height: 800,
  },
  {
    imgSrc: "/dummy.jpg",
    name: "Project Two",
    description: "This is a description for project two.",
    githubLink: "https://github.com/username/project-two",
    width: 1200,
    height: 800,
  },
];

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="p-6 text-white max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold mb-12 text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]"
      >
        Projects
      </motion.h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-4 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0.5 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200" />
            <div className="relative bg-slate-900 rounded-lg h-full border border-blue-500/20 flex flex-col">
              <Image
                src={project.imgSrc}
                alt={project.name}
                width={1200}
                height={800}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="flex flex-col justify-between flex-grow">
                <div className="bg-black bg-opacity-75 p-4 rounded-b-lg">
                  <motion.div
                    className="p-6 flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    
                    <h3 className="text-xl font-bold text-blue-400 [text-shadow:_0_0_10px_rgb(59_130_246_/_50%)]">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-left mt-2">{project.description}</p>
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.1 }}
                      className="text-blue-500 hover:underline text-left inline-block mt-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;