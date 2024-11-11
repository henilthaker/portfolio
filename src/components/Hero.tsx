import React from 'react';
import { ChevronRight, Download, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="px-20 order-last md:order-first">
            <div className="space-y-5">
              <div className="text-2xl md:text-2xl font-bold text-gray-600 flex justify-center">
                Hello, I'm
              </div>
              <h1 className="text-5xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex justify-center">
                  Henil Thaker
                </span>
              </h1>
              <h2 className="text-3xl md:text-3xl font-bold text-gray-600 flex justify-center">
                Full-Stack Developer
              </h2>
              <p className="text-xl text-gray-600 text-center">
                Passionate software developer with expertise in building web applications using modern technologies
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact"
                  className=" px-4 md:px-8 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition flex items-center gap-2">
                  Contact Me <ChevronRight size={20} />
                </a>
                <a href="Henil_Resume.pdf"
                  className="px-4 md:px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition flex items-center gap-2">
                  Download CV <Download size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20"></div>
            <img
              src="myImg.jpg"
              alt="Henil Thaker"
              className="relative w-60 h-60 rounded-full object-cover border-4 border-white shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}