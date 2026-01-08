import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react';
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-10">
      <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
      <div className="flex-col justify-center items-center">
        <div>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Thank you for taking the time to visit my portfolio website. I am passionate about my work and always looking for opportunities to connect with others who share similar interests. If you have any questions about my portfolio or would like to discuss a potential project, please don't hesitate to get in touch with me. You can easily by reaching out to me on LinkedIn or through an e-mail. I am always open to hearing new ideas and collaborating with others to create something great. So don't be shy, let's connect and see what we can create together!
          </p>
          <div className="gap-6 flex flex-wrap justify-center md:p-2">
            <a href="mailto:henilthaker@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition group">
              <div className="p-3 bg-red-100 rounded-full group-hover:bg-blue-100 transition">
                <Mail size={24} className="group-hover:text-blue-600" />
              </div>
              Email
            </a>
            <a href="https://www.linkedin.com/in/henil-thaker-a4a875239"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition group">
              <div className="p-3 bg-red-100 rounded-full group-hover:bg-blue-100 transition">
                <Linkedin size={24} className="group-hover:text-blue-600" />
              </div>
              LinkedIn
            </a>
            <a href="https://github.com/henilthaker"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition group">
              <div className="p-3 bg-red-100 rounded-full group-hover:bg-blue-100 transition">
                <Github size={24} className="group-hover:text-blue-600" />
              </div>
              Github
            </a>
          </div>
        </div>
        {/* <div className="bg-white p-8 rounded-xl shadow-lg">
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
            </div> */}
      </div>
    </div>
  )
}

export default Contact