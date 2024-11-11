import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  image
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
      <div className="p-6 h-64">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 p-6">
        <a href={githubUrl}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
          <Github size={20} /> Code
        </a>
        {demoUrl && (
          <a href={demoUrl}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
            <ExternalLink size={20} /> Demo
          </a>
        )}
      </div>
    </div>
  );
}