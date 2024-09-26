import NewsLetter from '@/components/HomePage/NewsLetter';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* BANNER------ABOUT */}
            <div className="carousel-item relative w-full h-[50vh] md:h-[90vh] bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.3),rgba(0,0,0,0.2)), url('https://i.ibb.co/qmqS5L6/About-Thumb.webp')`,
                }}>
                <div>
                    <h1 className=" absolute p-24 top-20  text-9xl font-black text-white">Our <br /> <span className='text-theme'>Studio</span></h1>
                </div>
            </div>
            {/* INTERMEDIATE-------SECTION--- */}
            <div className="w-5/6 mx-auto my-12">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center'>
                    <div>
                        <Image height={900} width={900} alt='process_image' src={'https://i.ibb.co/cJQfVGX/About-1.webp'} ></Image>
                    </div>
                    <div className='w-5/6 md:w-full mx-auto'>
                        {/* <h2 className='text-theme text-6xl font-semibold'>Process</h2> */}
                        <p className='my-6  text-justify md:text-left'> <span className='text-theme font-semibold'> Plenora Architects </span>is a Vancouver-based studio practice focused on modern design, interiors and landscapes. From our inception in 2007, we have delivered exceptional public and private environments that are stimulating to occupy and fundamental to their surroundings. As a full-service firm, Measured is present on projects from start to finish, ensuring that the ideas conceived in the beginning with clients are manifest at the end. We achieve this through close collaboration with all members of the project team, including consultants, contractors, trades and artisans.</p>
                        {/* <a className='text-theme font-bold' href="">Read more</a> */}
                    </div>
                </div>
            </div>
            {/* PLENORA----IN----YEARS */}
            <div className='w-5/6 mx-auto'>
                <h1 className='text-theme text-3xl md:text-6xl font-bold'>Plenora in <br /> Years </h1>
                <div className='grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-12 items-center'>
                    <div className='col-span-2'>
                        <h1 className="text-gray text-xl md:text-4xl font-bold">20<br /><span className='text-theme text-4xl md:text-9xl '>07</span> </h1>
                    </div>
                    <div className='col-span-3'>
                        <h1 className="text-gray text-xl md:text-4xl font-bold">With Clinton Cuddington at the helm, Measured opens its doors as a full-service architecture firm with the objective of creating contemporary, environmentally sound buildings for both the private and public sectors.</h1>
                    </div>
                    <div className='col-span-1'>
                        <Image></Image>
                    </div>
                </div>
            </div>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default page;