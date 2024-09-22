import Image from 'next/image';
import React from 'react';

const FeaturedProject = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-col-1'>
                <div className='flex'>
                    <div>
                        <Image height={500} width={500} alt='process_image' src={'https://i.postimg.cc/ZqP5p28X/featured1a.webp'} ></Image>
                    </div>
                    <div>
                        <Image height={500} width={500} alt='process_image' src={'https://i.postimg.cc/G2chQKzt/featured-1.webp'} ></Image>
                    </div>
                </div>
                <div>
                    <h1 className="text-theme ">Featured Project</h1>
                    <h2 className="text-6xl text-gray font-semibold">Frame House</h2>
                    <p><span className='font-semibold'>Scope</span> Architecture/Interiors</p>
                    <div>
                        <a className='text-theme' href="/projects"> See all projects</a>
                    </div>
                </div>
            </div>
            <div>
                    <Image height={900} width={800} alt='process_image' src={'https://i.postimg.cc/GhR0D9J8/process.webp'} ></Image>
            </div>
        </div>
    );
};

export default FeaturedProject;