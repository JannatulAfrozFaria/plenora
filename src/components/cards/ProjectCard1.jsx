import Image from 'next/image';
import React from 'react';

const ProjectCard1 = ({project}) => {
    const {id,name, category,description,image,handOverDate,phase} = project;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  items-center overflow-hidden'>
            <div className="carousel-item relative w-full h-full bg-no-repeat bg-cover transition-transform duration-500 hover:scale-110"
                style={{
                    backgroundImage: ` url(${image})`,
                }}>
                    <div className="absolute top-[140px] -right-7 rotate-45 text-3xl">
                            <Image width={50} height={50} src={'https://i.ibb.co/m6ZcvjR/tri-removebg-preview.png'} alt='triangle'></Image>
                    </div>
            </div>
            <div className='text-gray pl-10 pr-8 py-6'>
                <h1 className='text-theme text-4xl font-bold'>{name} </h1>
                <div className="mt-10">
                    <h1> <span className='font-bold'>Category:</span> {category} </h1>
                    <h1> <span className='font-bold'>Description: <br /> </span> {description} </h1>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard1;