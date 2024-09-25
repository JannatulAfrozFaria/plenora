import Link from 'next/link';
import React from 'react';
import { GrLinkNext } from "react-icons/gr";

const NewsLetter = () => {
    return (
        <div className='theme-bg'>
            <div className='w-5/6 mx-auto flex gap-16 justify-between'>
                <div>
                    <p className="text-base md:text-xl text-black">Stay in the loop, subscribe to our</p>
                    <h1 className="text-3xl md:text-6xl">Newsletter</h1>
                </div>
                <div className='text-white'>
                    <h1>Your Name</h1>
                    <h1>Your email address</h1>
                    <div className="flex gap-4 items-center justify-end">
                        <h1>Subscribe now</h1>
                        <Link> <button className='bg-white text-theme p-4'>  <GrLinkNext /> </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;