import React from 'react';
import { ProjectsInfo } from '@/lib/projectsInfo';
import ProjectCard1 from '@/components/cards/ProjectCard1';
import ProjectCard2 from '@/components/cards/ProjectCard2';
import Image from 'next/image';
import NewsLetter from '@/components/HomePage/NewsLetter';
import { PageWrapper } from '../PageWrapper';

const page = () => {
    return (
        <div>
            <PageWrapper>
                <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-40 items-center">
                    <div className=''>
                        <h1 className='text-gray-400 text-[60px] md:text-[200px]'>Works</h1>
                    </div>
                    <div className='text-gray mb-8 md:mb-0'>
                        <h1 className='text-bold text-gray'>of </h1>
                        <h1 className="text-theme font-bold text-xl md:text-4xl">Plenora Architects Studio</h1>
                    </div>
                </div>
                {/* COVER-PROJECT------- */}
                <div>
                    {ProjectsInfo.slice(13, 14).map(project =>
                        <div key={project.id} className='grid grid-cols-1 md:grid-cols-2  items-center overflow-hidden'>
                            <div className="carousel-item relative w-full h-[80vh] bg-no-repeat bg-cover transition-transform duration-500 hover:scale-110"
                                style={{
                                    backgroundImage: ` url(${project.image})`,
                                }}>
                                <div className="hidden md:block absolute top-[280px] -right-14 rotate-45 text-3xl">
                                    <Image width={100} height={100} src={'https://i.ibb.co/m6ZcvjR/tri-removebg-preview.png'} alt='triangle'></Image>
                                </div>
                            </div>
                            <div className='text-gray pl-10 md:pl-20 pr-10 py-6 transition-transform duration-500 hover:scale-110'>
                                <h1 className='text-theme text-xl font-bold'>Latest Project</h1>
                                <h1 className='text-gray-400 text-4xl md:text-8xl font-bold my-4 md:my-12'>{project.name} </h1>
                                <h1 className='capitalize'> <span className='font-bold'>Category:</span> {project.category} </h1>
                                <h1 className='capitalize'> <span className='font-bold'>Project State:</span> {project.phase} </h1>
                                <div className="">
                                    <p className=' text-justify my-3'>
                                        {/* <span className='font-bold '>Description: </span>   
                             <br /> */}
                                        <span className="text-theme font-bold">{project.description.split(" ").slice(0, 2).join(" ")} </span>
                                        <span>{project.description.split(" ").slice(2).join(" ")}</span>
                                        {project.description} </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* ALL------PROJECTS------- */}
                <div className=' grid grid-cols-1 md:grid-cols-2'>
                    {ProjectsInfo.slice(0, 2).map(project =>
                        <ProjectCard1 key={project.id} project={project} ></ProjectCard1>
                    )}
                    {ProjectsInfo.slice(2, 4).map(project =>
                        <ProjectCard2 key={project.id} project={project} ></ProjectCard2>
                    )}
                    {ProjectsInfo.slice(4, 6).map(project =>
                        <ProjectCard1 key={project.id} project={project} ></ProjectCard1>
                    )}
                    {ProjectsInfo.slice(6, 8).map(project =>
                        <ProjectCard2 key={project.id} project={project} ></ProjectCard2>
                    )}
                    {ProjectsInfo.slice(8, 10).map(project =>
                        <ProjectCard1 key={project.id} project={project} ></ProjectCard1>
                    )}
                    {ProjectsInfo.slice(10, 12).map(project =>
                        <ProjectCard2 key={project.id} project={project} ></ProjectCard2>
                    )}
                </div>
                <div className='mt-12 md:mt-0'>
                    <NewsLetter></NewsLetter>
                </div>
            </PageWrapper>
        </div>
    );
};

export default page;