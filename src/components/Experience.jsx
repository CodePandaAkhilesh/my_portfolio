import React from 'react'
import img_about1 from '/experience.avif'
import img_about2 from '/img_about2.jpg'
import img_about from '/img_about.jpg'

const Experience = () => {
  return (
    <section id="about" className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6">    
        <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
            <figure data-aos='fade-right' data-aos-delay='500' className='flex flex-wrap justify-center gap-4 relative'>
                <div className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l
                from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute tranform rotate-12 z-0 right-5 -top-2
                md:top-10 rounded-full"></div>
                <img src = {img_about1} alt="about picture 2"
                className='relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg'/>
            </figure>

            <article data-aos="fade-left" data-aos-delay="500" className='text-center lg:text-left relative'>
              <div className='absolute z-0 w-40 sm:w-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-50
              left-10'></div>
            <header>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                My <span className='text-purple-400'>Experience</span>
              </h1>
            </header>
            <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
                <h1 className='text-lg sm:text-xl font-semibold mb-2'>YugaYatra Retail OPC Pvt. Ltd. ( Jul 2025 – Sep 2025 )</h1>
                Software Engineer Intern Remote<br/>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                    • Developed web/mobile apps using Cursor AI and Firebase Studio.
                </p>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                    • Designed UI assets and worked on Amazon/Flipkart seller portals.
                </p>
                <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                    • Collaborated with team and contributed to freelance projects on Upwork.
                </p>
            </p>
            <footer>
              <a
                href="https://www.linkedin.com/company/yugayatra-retail-opc-private-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className='inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none
                  hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-sm sm:text-lg'>
                  Learn More
                </button>
              </a>

            </footer>   
            </article>
        </div>
    </section>
  )
}

export default Experience
