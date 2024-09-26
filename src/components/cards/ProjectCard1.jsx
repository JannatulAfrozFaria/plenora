import Image from 'next/image';
import React from 'react';

const ProjectCard1 = ({project}) => {
    const {id,name, category,description,image,handOverDate,phase} = project;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div>
                <Image width={500} height={500} alt='projectImage' src={image} ></Image>
            </div>
            <div className='text-gray'>
                <h1 className='text-theme text-4xl font-bold'>{name} </h1>
                <div className="mt-12">
                    <h1> <span className='font-bold'>Category:</span> {category} </h1>
                    <h1> <span className='font-bold'>Description: <br /> </span> {description} </h1>
                    <h1> <span className='font-bold'>Current Phase:</span> {phase} </h1>
                    <h1> <span className='font-bold'>Hand-over Date:</span> {handOverDate} </h1>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard1;