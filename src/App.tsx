import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;