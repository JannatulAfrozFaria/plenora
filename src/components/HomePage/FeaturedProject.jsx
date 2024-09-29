"use client";
import { PageWrapper } from "@/app/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import React from 'react';

const FeaturedProject = () => {
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };
    const images = {
        hidden:{
            opacity: 0,
            x: 30,
        },
        show:{
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            },
        },
    };
    return (
        <div>
            <PageWrapper>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='grid grid-col-1'>
                        <div className='flex'>
                            <div>
                                <Image height={400} width={396} alt='process_image' src={'https://i.postimg.cc/ZqP5p28X/featured1a.webp'} ></Image>
                            </div>
                            <div>
                                <Image height={500} width={500} alt='process_image' src={'https://i.postimg.cc/G2chQKzt/featured-1.webp'} ></Image>
                            </div>
                        </div>
                        <div className='w-4/5 mx-auto p-10 md:p-0'>
                            <h1 className="text-theme font-semibold ">Featured Project</h1>
                            <h2 className="text-6xl text-gray font-semibold my-3">Frame House</h2>
                            <p><span className='font-semibold'>Scope  </span> Architecture/Interiors</p>
                            <div className='flex justify-start md:justify-end mt-6'>
                                <a className='text-theme font-semibold' href="/projects"> See all projects</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image height={900} width={800} alt='process_image' src={'https://i.postimg.cc/G2chQKzt/featured-1.webp'} ></Image>
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
};

export default FeaturedProject;