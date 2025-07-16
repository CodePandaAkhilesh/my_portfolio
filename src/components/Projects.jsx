import React from 'react'
import project1 from '/webcrafter.png'
import project2 from '/revisemate.png'
import project3 from '/leetcode.png'

const ProjectCard = ({image,title,description,link}) => {
    return (
        <article className='relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group'>
            <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl'></div>
            <div className='relative z-10'>
                <figure className='relative'>
                    <img src={image} alt={title} className='w-full h-48 object-cover transition-transform duration-300 group-hover:sclae-110'/>
                    <a href={link} target="_blank" rel="noopener noreferrer"
                    className='absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0
                    group-hover:opacity-100 transition-opacity duration-300'>
                        <button className='bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879b5]'>
                            Live Preview
                        </button>
                    </a>
                </figure>
                <div className='px-6 py-4'>
                    <header>
                        <h3 className='text-white font-bold text-xl mb-2'>{title}</h3>
                    </header>
                    <p className='text-gray-200 text-base'>{description}</p>
                </div>
            </div>
        </article>
    )
}; 

const Projects = () => {
    const listProjects = [
        {
            image: project1,
            title:'WebCrafter-GenAI',
            description: `An AI-powered web application that generates complete website code (HTML, CSS, and JavaScript) from simple user prompts.`,
            link: 'https://web-crafter-gen-ai-three.vercel.app/'
        },
        {
            image: project2,
            title:'ReviseMate - AI-Powered Exam Revision Buddy',
            description: 'ReviseMate is a smart AI study assistant that helps students revise through quizzes and simplified explanations.',
            link: 'https://ai-agent-drab-chi.vercel.app/'
        },
        {
            image: project3,
            title:'Leetcode Metrics App',
            description: `Easily fetch and visualize your LeetCode stats by entering your username.`,
            link: 'https://github.com/CodePandaAkhilesh/Leetcode-Metrics-App'
        },
    ];
  return (
    <main className='p-4' id="projects">
        <section data-aos='fade-up' data-aos-delay='300'>
            <header className='text-center'>
                <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
                    My <span className='text-purple-400'>Projects</span>
                </h1>
                <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, vel.
                </p>
            </header>
        </section>
        <section data-aos='fade-up' data-aos-delay="500" className='flex flex-wrap gap-4 justify-center mt-6'>
            {listProjects.map((project, index)=>(
                <ProjectCard key={index} image={project.image} title={project.title} description={project.description} link={project.link}/>

            ))}
        </section>
    </main>
  )
}

export default Projects
