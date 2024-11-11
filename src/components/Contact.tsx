import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react';
const Contact = () => {
  return (
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
  )
}

export default Contact