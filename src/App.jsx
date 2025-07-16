import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <main className='bg-gray-900'>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App; 
