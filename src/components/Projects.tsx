import React from 'react'
import ProjectCard from './ProjectCard';

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

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Projects