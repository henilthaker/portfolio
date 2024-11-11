import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { Mail, Github, Linkedin } from 'lucide-react';
import { FaCss3Alt, FaFigma, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiSupabase,
  SiJavascript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { DiJava, DiMysql } from "react-icons/di";


function App() {
  const projects = [
    {
      title: "Chatify",
      description: "A real-time chat application with user authentication and real-time messaging capabilities.",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "TypeScript", "OAuth", "MongoDB"],
      githubUrl: "https://github.com/henilthaker/Online-Chat-App",
      demoUrl: "https://online-chat-app-gamma.vercel.app/",
      image: "chatify.png"
    },
    {
      title: "Custom-Craft",
      description: "A customized e-commerce platform offering product personalization, interactive 3D models, and tailored recommendations for enhanced shopping.",
      technologies: ["React", "Three.js", "Flask", "TensorFlow"],
      githubUrl: "https://github.com/henilthaker/CustomCraft",
      demoUrl: "#",
      image: "custom-craft.png"
    },
    {
      title: "Nexus Website",
      description: "A website for students club of NIT Surat, called Nexus.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/NEXUS-NIT-Surat/Nexus",
      demoUrl: "https://www.nexus-svnit.tech/",
      image: "nexus-website.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-4">
              I'm a passionate full-stack developer dedicated to creating efficient, user-friendly web applications. With experience across front-end and back-end development, I bring together strong coding skills, attention to detail, and a commitment to delivering high-quality projects. From building interactive interfaces to managing databases, I enjoy transforming ideas into functional, scalable solutions.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              I am always on the lookout for new challenges and opportunities to collaborate on projects that make a positive impact. If you share my interests, feel free to connect with me on LinkedIn or Github.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="flex flex-wrap gap-16 justify-center md:grid-cols-4 gap-24">
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <FaHtml5 className="max-md:w-12 max-md:h-12 w-20 h-20 text-orange-600" />
              <p className="">HTML</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <FaCss3Alt className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-700" />
              <p className="">CSS</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <SiJavascript className="max-md:w-12 max-md:h-12 w-20 h-20 text-yellow-600 bg-black" />
              <p className="">Javascript</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <FaReact className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-400" />
              <p className="">ReactJS</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <FaNodeJs className="max-md:w-12 max-md:h-12 w-20 h-20 text-green-600" />
              <p className="">NodeJS</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <SiExpress className="max-md:w-12 max-md:h-12 w-20 h-20 text-black" />
              <p className="">ExpressJS</p>
            </div>
            {/* <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <SiNextdotjs className="max-md:w-12 max-md:h-12 w-20 h-20 text-black  " />
              <p className="">NextJS</p>
            </div> */}

            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <SiMongodb className="max-md:w-12 max-md:h-12 w-20 h-20 text-green-500" />
              <p className="">MongoDB</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg">
              <SiFirebase className="max-md:w-12 max-md:h-12 w-20 h-20 text-yellow-500" />
              <p className="">Firebase</p>
            </div>

            {/* <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <SiSupabase className="max-md:w-12 max-md:h-12 w-20 h-20 text-green-600  " />
              <p className="">Supabase</p>
            </div> */}
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <TbBrandCpp className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-600" />
              <p className="">C/C++</p>
            </div>
            {/* <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <FaFigma className="max-md:w-12 max-md:h-12 w-20 h-20 text-black  " />
              <p className="">Figma</p>
            </div> */}
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <DiMysql className="max-md:w-12 max-md:h-12 w-20 h-20 text-blue-600" />
              <p className="">MySQL</p>
            </div>
            <div className="flex flex-col gap-4 items-center theme-font font-medium text-lg max-md:hidden">
              <DiJava className="max-md:w-12 max-md:h-12 w-20 h-20 text-red-600" />
              <p className="">Java</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-10">
          <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                I'm always open to discussing new projects, opportunities, or partnerships.
                Feel free to reach out to me through any of these channels:
              </p>
              <div className="space-y-6">
                <a href="mailto:henilthaker2010@gmail.com"
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition group">
                  <div className="p-3 bg-gray-100 rounded-full group-hover:bg-blue-100 transition">
                    <Mail size={24} className="group-hover:text-blue-600" />
                  </div>
                  dev.henilthaker@gmail.com
                </a>
                <a href="https://github.com/henilthaker"
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition group">
                  <div className="p-3 bg-gray-100 rounded-full group-hover:bg-blue-100 transition">
                    <Github size={24} className="group-hover:text-blue-600" />
                  </div>
                  github.com/henilthaker
                </a>
                <a href="https://www.linkedin.com/in/henil-thaker-a4a875239"
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition group">
                  <div className="p-3 bg-gray-100 rounded-full group-hover:bg-blue-100 transition">
                    <Linkedin size={24} className="group-hover:text-blue-600" />
                  </div>
                  linkedin.com/in/henil-thaker
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div>
          <p className="w-fit mx-auto px-4">© 2024 Henil Thaker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;