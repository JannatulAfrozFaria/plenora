import React from 'react';

const ProjectCard2 = ({project}) => {
    const {id,name, category,description,image,handOverDate,phase} = project;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  items-center'>
            <div className='text-gray pl-10 pr-8 py-6 text-right'>
                <h1 className='text-theme text-4xl font-bold'>{name} </h1>
                <div className="mt-10">
                    <h1> <span className='font-bold'>Category:</span> {category} </h1>
                    <h1> <span className='font-bold'>Description: <br /> </span> {description} </h1>
                </div>
            </div>
            <div className="carousel-item relative w-full h-full bg-no-repeat bg-cover"
                style={{
                    backgroundImage: ` url(${image})`,
                }}>
                    <div className="absolute top-[140px] -left-7 rotate-45 bg-white w-30 h-30 text-3xl pt-1 text-white ">hel</div>
            </div>
        </div>
    );
};

export default ProjectCard2;