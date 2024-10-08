"use client";
// import AosConfig from '@/app/AosConfig';
import Link from 'next/link';
import React from 'react';
import { MdNavigateNext } from "react-icons/md";
import AosConfig from '../../app/AosConfig';
const NewsLetter = () => {
    return (
        <div>
            {/* <AosConfig> */}
                <div className='theme-bg '>
                    <div className='w-5/6 md:w-full mx-auto grid grid-cold-1 md:grid-cols-5 gap-8 items-center px-0 md:px-20 '>
                        <div className='col-span-3'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="1500">
                            <p className="text-sm font-bold text-black">Stay in the loop, subscribe to our</p>
                            <h1 className="text-4xl md:text-7xl text-white">Newsletter</h1>
                        </div>
                        <div className='text-white col-span-2'
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="2500">
                            <h1>Your Name</h1>
                            <input
                                type="text"
                                className="input border-b-2 border-b-white bg-transparent w-full rounded-none mb-4 md:mb-8 " />
                            <h1>Your email address</h1>
                            <input
                                type="email"
                                className="input border-b-2 border-b-white bg-transparent w-full rounded-none" />
                            <div className="flex gap-4 md:gap-8 items-center justify-end">
                                <h1 className='font-bold text-xl'>Subscribe now</h1>
                                <Link href={'/'}> <button className='bg-white text-theme  font-bold text-6xl p-4'>
                                    <MdNavigateNext />
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </AosConfig> */}
        </div>

    );
};
export default NewsLetter;