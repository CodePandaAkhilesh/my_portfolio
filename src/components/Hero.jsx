import React from 'react'
import Navbar from './Navbar'
import Akhilesh from '/akhilesh.jpeg'
import Resume from '/RESUME.pdf';
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"
const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'> 
      <div className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r absolute from-[#6d2897] via-[#8e6cf5]
      to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>
      <Navbar/>
      <main id="home" className='flex flex-col md:flex-row items-center justify-center w-full px-4
      md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10'>
        <section className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative'
        data-aos="fade-up"
        data-aos-delay="500">
          <div className='absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5
          -left-12'></div>
            <header>
              <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>Akhilesh Verma</h1>
              <h2 >
                <ReactTyped
                className="text-purple-500 text-3xl font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
               </h2>
            </header>
            <p className='text-base sm:text-lg md:text-lg text-gray-200 mb-6'>
              Driven by a passion for software engineering, development, and problem-solving.
               Enthusiastic about Generative AI and always exploring new technologies to learn,
                build, and innovate.
            </p>
            <div className='flex items-center space-x-4 mb-6'>
              <ul className="flex items-center space-x-4">
                <li>
                  <a href="https://www.linkedin.com/in/akhilesh-verma-905b3225a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/CodePandaAkhilesh" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://leetcode.com/u/av14021999/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode className="text-3xl cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
            <a href={Resume} download>
              <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c]
              hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>Download Resume</button>
            </a>
        </section>
        <figure data-aos='fade-up' data-aos-delays='500' className='flex-1 flex justify-center md:justify-end mt-0'>
          <img src={Akhilesh} alt="Hero Image" className="h-[250px] w-[250px] sm:h-[480px] sm:w-[480px] object-cover rounded-full"></img>
        </figure>
      </main>
    </div>
  )
}

export default Hero
