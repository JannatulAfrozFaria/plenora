import Link from 'next/link';
import React from 'react';
import { MdNavigateNext } from "react-icons/md";

const NewsLetter = () => {
    return (
        <div className='theme-bg '>
            <div className='w-5/6 md:w-full mx-auto grid grid-cold-1 md:grid-cols-5 gap-8 items-center px-0 md:px-20 py-10'>
                <div className='col-span-3'>
                    <p className="text-sm font-bold text-black">Stay in the loop, subscribe to our</p>
                    <h1 className="text-4xl md:text-9xl text-white">Newsletter</h1>
                </div>
                <div className='text-white col-span-2'>
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
                        <Link href={'/'}> <button className='bg-white text-theme  font-bold text-6xl p-4 md:p-8'>
                            <MdNavigateNext />
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;