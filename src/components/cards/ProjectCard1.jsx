import Image from 'next/image';
import React from 'react';

const ProjectCard1 = ({project}) => {
    const {id,name, category,description,image} = project;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div>
                <Image width={500} height={500} alt='projectImage' src={image} ></Image>
            </div>
            <div>
                <h1>Name: {name} </h1>
            </div>
        </div>
    );
};

export default ProjectCard1;