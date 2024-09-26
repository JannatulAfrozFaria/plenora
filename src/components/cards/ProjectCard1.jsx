import Image from 'next/image';
import React from 'react';

const ProjectCard1 = ({project}) => {
    const {id,name, category,description,image} = project;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <Image></Image>
            </div>
            
        </div>
    );
};

export default ProjectCard1;