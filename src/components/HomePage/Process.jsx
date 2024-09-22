import Image from 'next/image';
import React from 'react';

const Process = () => {
    return (
        <div className='grid grid-cols-2 gap-6 md:gap-16'>
            <div>
                <Image height={600} width={600} alt='processimage' src={'https://i.postimg.cc/GhR0D9J8/process.webp'} ></Image>
            </div>
            <div>
                <h2 className='text-theme text-6xl'>Process</h2>
                <p><span className='text-theme'>As a</span> full-service architectural firm, Measured is engaged in every phase of a project from concept to completion, enabling the creation of environments (building, interiors and landscape) that facilitate the desires of clients. Our goal is to design a backdrop for your lives where your experience of it is exactly what you imagined it would be at the outset.</p>
                <a href="">Read more</a>
            </div>
        </div>
    );
};

export default Process;