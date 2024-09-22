import Image from 'next/image';
import React from 'react';

const FeaturedProject = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-col-1'>
                <div className='flex'>
                <div>
                    <Image height={900} width={800} alt='process_image' src={'https://i.postimg.cc/GhR0D9J8/process.webp'} ></Image>
                </div>
                <div>
                    <Image height={900} width={800} alt='process_image' src={'https://i.postimg.cc/GhR0D9J8/process.webp'} ></Image>
                </div>
                </div>
                <div></div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default FeaturedProject;