"use client";
import AosConfig from '@/app/aosConfig';
import React from 'react';

const Title = ({ heading, subHeading }) => {
    return (
        <div >
            <AosConfig>
                <div className='text-center mb-6 md:mb-12'>
                    <h1 data-aos="fade-right" data-aos-delay="20" data-aos-duration="1600"
                        data-aos-offset="200" 
                        className='text-gray font-bold mb-2'>{subHeading}</h1>
                    <h2
                       data-aos="fade-left" data-aos-delay="20" data-aos-duration="2000"
                       data-aos-offset="200" 
                        className="text-theme text-2xl md:text-5xl mb-4 md:mb-6">{heading}</h2>
                </div>
            </AosConfig>
        </div>
    );
};

export default Title;