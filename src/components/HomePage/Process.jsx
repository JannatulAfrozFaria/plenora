"use client";
// import AosConfig from '@/app/AosConfig';
import Image from 'next/image';
import React from 'react';
import AosConfig from '../../app/AosConfig';

const Process = () => {
    return (
        <div>
            {/* <AosConfig> */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center'>
                    <div data-aos="flip-up" data-aos-delay="50" data-aos-duration="1600"
                        data-aos-offset="200" data-aos-easing="ease-in-out">
                        <Image height={1000} width={1000} alt='process_image' 
                        // src={'https://i.postimg.cc/GhR0D9J8/process.webp'} 
                        src={'https://i.ibb.co/YpKdRgR/process-featured.webp'} 
                        ></Image>
                    </div>
                    <div className='w-5/6 md:w-full mx-auto pl-0 md:pl-16'
                        data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="1200"
                        data-aos-offset="200" data-aos-easing="ease-in-out"
                    >
                        <h2 className='text-theme text-6xl font-semibold'>Process</h2>
                        <p className='my-6 w-full md:w-4/5 text-justify md:text-left'> <span className='text-theme font-semibold'> As a </span>full-service architectural firm, Measured is engaged in every phase of a project from concept to completion, enabling the creation of environments (building, interiors and landscape) that facilitate the desires of clients. Our goal is to design a backdrop for your lives where your experience of it is exactly what you imagined it would be at the outset.</p>
                        <a className='text-theme font-bold' href="/process">Read more</a>
                    </div>
                </div>
            {/* </AosConfig> */}
        </div>

    );
};

export default Process;