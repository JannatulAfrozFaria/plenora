import Image from 'next/image';
import React from 'react';

const FeaturedProject = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-col-1'>
                <div className='flex'>
                    <div>
                        <Image height={500} width={500} alt='process_image' src={'https://i.postimg.cc/GhR0D9J8/process.webp'} ></Image>
                    </div>
                    <div>
                        <Image height={500} width={500} alt='process_image' src={'https://i.postimg.cc/GhR0D9J8/process.webp'} ></Image>
                    </div>
                </div>
                <div></div>
            </div>
            <div>
                    <h1 className="text-theme ">Featured Project</h1>
                    <h2 className="text-6xl text-gray font-semibold">Frame House</h2>
                    <p><span className='font-semibold'>Scope</span> Architecture/Interiors</p>
            </div>
        </div>
    );
};

export default FeaturedProject;