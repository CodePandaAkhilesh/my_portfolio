import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'About', link: '#about' },
    { id: 3, name: 'Skills', link: '#skills' },
    { id: 4, name: 'My Projects', link: '#projects' }
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-20 text-white' data-aos='fade-up' data-aos-delay='300'>
      <div className='container mx-auto flex items-center justify-between p-5'>
        {/* Logo */}
        <a href="#home" className='text-4xl font-bold italic text-white'>Portfolio</a>

        {/* Mobile menu toggle */}
        <button className='md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          <FiMenu className='w-8 h-8 text-white' />
        </button>

        {/* Desktop navigation */}
        <nav className='hidden md:flex items-center space-x-7'>
          {NavbarLinks.map((link) => (
            <a key={link.id} href={link.link} className='hover:text-gray-200 text-lg'>
              {link.name}
            </a>
          ))}
          
          {/* ✅ Desktop Contact Button */}
          <a href="#contact">
            <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg'>
              Contact
            </button>
          </a>
        </nav>
      </div>

      {/* Mobile navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#801b9c] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>
        {/* Close button */}
        <button className='absolute top-5 right-5 text-white' onClick={() => setIsOpen(false)}>
          <FiX className="w-8 h-8" />
        </button>

        {/* Mobile navigation links */}
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-lg text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* ✅ Mobile Contact Button */}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg'
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
