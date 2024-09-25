import React from 'react';

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
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;