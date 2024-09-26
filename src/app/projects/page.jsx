import React from 'react';
import { ProjectsInfo } from '@/lib/projectsInfo';
import ProjectCard1 from '@/components/cards/ProjectCard1';
import ProjectCard2 from '@/components/cards/ProjectCard2';

const page = () => {
    return (
        <div>
            <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className='text-gray-400 text-[130px] md:text-[260px]'>Work</h1>
                </div>
                <div className='text-gray'>
                    <h1 className='text-bold text-gray'>Filter by scope</h1>
                    
                </div>
            </div>
            <div>
                {ProjectsInfo.slice(13,14).map(project=>
                     <div key={project.id} className='grid grid-cols-1 md:grid-cols-2  items-center overflow-hidden'>
                     <div className="carousel-item relative w-full h-full bg-no-repeat bg-cover transition-transform duration-500 hover:scale-110"
                         style={{
                             backgroundImage: ` url(${project.image})`,
                         }}>
                             <div className="absolute top-[140px] -right-7 rotate-45 text-3xl">
                                     <Image width={50} height={50} src={'https://i.ibb.co/m6ZcvjR/tri-removebg-preview.png'} alt='triangle'></Image>
                             </div>
                     </div>
                     <div className='text-gray pl-10 pr-8 py-6'>
                         <h1 className='text-theme text-4xl font-bold'>{project.name} </h1>
                         <div className="mt-10">
                             <h1> <span className='font-bold'>Category:</span> {project.category} </h1>
                             <h1> <span className='font-bold'>Description: <br /> </span> {project.description} </h1>
                         </div>
                     </div>
                 </div>
                )}
            </div>
            <div className=' grid grid-cols-2'>
                        {ProjectsInfo.slice(0,2).map(project=>
                            <ProjectCard1 key={project.id} project ={project} ></ProjectCard1>
                        )}
                        {ProjectsInfo.slice(2,4).map(project=>
                            <ProjectCard2 key={project.id} project ={project} ></ProjectCard2>
                        )}
                        {ProjectsInfo.slice(4,6).map(project=>
                            <ProjectCard1 key={project.id} project ={project} ></ProjectCard1>
                        )}
                        {ProjectsInfo.slice(6,8).map(project=>
                            <ProjectCard2 key={project.id} project ={project} ></ProjectCard2>
                        )}
            </div>
        </div>
    );
};

export default page;