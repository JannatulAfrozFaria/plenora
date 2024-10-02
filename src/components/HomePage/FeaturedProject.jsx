"use client";
// import AosConfig from '@/app/AosConfig';
import { PageWrapper } from "@/app/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import React from 'react';
import AosConfig from '../../app/AosConfig';

const FeaturedProject = () => {
    // const variants = {
    //     hidden: { opacity: 0 },
    //     show: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.3,
    //         },
    //     },
    // };
    // const images = {
    //     hidden:{
    //         opacity: 0,
    //         x: 30,
    //     },
    //     show:{
    //         opacity: 1,
    //         x: 0,
    //         transition: {
    //             duration: 1
    //         },
    //     },
    // };
    return (
        <div>
            {/* <AosConfig> */}
                <div
                // variants={variants}
                 className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='grid grid-col-1'>
                        <div className='flex'
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="20"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out">
                            <div>
                                {/* <Image height={400} width={396} alt='process_image' src={'https://i.postimg.cc/ZqP5p28X/featured1a.webp'} ></Image> */}
                                <Image height={400} width={396} alt='process_image' src={'https://i.ibb.co/VtC5Lkw/orange-l-2.jpg'} ></Image>
                            </div>
                            <div>
                                {/* <Image height={500} width={500} alt='process_image' src={'https://i.postimg.cc/G2chQKzt/featured-1.webp'} ></Image> */}
                                <Image height={500} width={500} alt='process_image' src={'https://i.ibb.co/sFFFFsC/orange-sq0.jpg'} ></Image>
                            </div>
                        </div>
                        <div className='w-4/5 mx-auto p-10 md:p-0'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="40"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out">
                            <h1 className="text-theme font-semibold ">Featured Project</h1>
                            <h2 className="text-6xl text-gray font-semibold my-3">Frame House</h2>
                            <p><span className='font-semibold'>Scope  </span> Architecture/Interiors</p>
                            <div className='flex justify-start md:justify-end mt-6'>
                                <a className='text-theme font-semibold' href="/projects"> See all projects</a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200"
                         data-aos-offset="200" data-aos-easing="ease-in-out" >
                        {/* <Image height={900} width={800} alt='process_image' src={'https://i.postimg.cc/G2chQKzt/featured-1.webp'} ></Image> */}
                        <Image height={900} width={800} alt='process_image' src={'https://i.ibb.co/TvsPVdV/orange-sq-l-1.jpg'} ></Image>
                    </div>
                </div>
            {/* </AosConfig> */}
        </div>
    );
};

export default FeaturedProject;