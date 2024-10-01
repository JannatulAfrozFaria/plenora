import NewsLetter from '@/components/HomePage/NewsLetter';
import Image from 'next/image';
import React from 'react';
import { PageWrapper } from '../PageWrapper';

const page = () => {
    return (
        <div>
            <PageWrapper>
                {/* BANNER------ABOUT */}
                <div className="carousel-item relative w-full h-[50vh] md:h-[90vh] bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.3),rgba(0,0,0,0.2)), url('https://i.ibb.co/ggh4WzC/team8.jpg')`,
                    }}>
                        {/* https://i.ibb.co/qmqS5L6/About-Thumb.webp */}
                    <div>
                        <h1 className=" absolute p-16 md:p-24 top-0 md:top-20 text-5xl md:text-9xl font-black text-white">Our <br className='hidden md:block' /> <span className='text-theme'>Studio</span></h1>
                    </div>
                </div>
                {/* ABOUT -----COMPANY----- */}
                <div className="w-5/6 mx-auto my-12">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center'>
                        <div className='relative'>
                            <Image height={900} width={900} alt='process_image' src={'https://i.ibb.co/FKKFcHT/about-company-1.png'} ></Image>
                            <div className='absolute -top-[85px] md:-top-[171px] -right-20'> 
                                <Image height={600} width={900} alt='process_image' src={'https://i.ibb.co/VW7w3qp/coll2.png'} ></Image>
                            </div>
                        </div>
                        <div className='w-full mx-auto'>
                            {/* <h2 className='text-theme text-6xl font-semibold'>Process</h2> */}
                            <p className='my-6 text-justify md:text-left text-gray'><span className='text-theme font-semibold' > Plenora Architects </span> is a Vancouver-based studio practice focused on modern design, interiors and landscapes. From our inception in 2007, we have delivered exceptional public and private environments that are stimulating to occupy and fundamental to their surroundings. As a full-service firm, Measured is present on projects from start to finish, ensuring that the ideas conceived in the beginning with clients are manifest at the end. We achieve this through close collaboration with all members of the project team, including consultants, contractors, trades and artisans.</p>
                            {/* <a className='text-theme font-bold' href="">Read more</a> */}
                        </div>
                    </div>
                </div>
                {/* INTERMEDIATE-------SECTION--- */}
                <div className="w-5/6 mx-auto my-12">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center'>
                        <div>
                            <Image height={900} width={900} alt='process_image' src={'https://i.ibb.co/VW7w3qp/coll2.png'} ></Image>
                        </div>
                        <div className='w-full mx-auto'>
                            {/* <h2 className='text-theme text-6xl font-semibold'>Process</h2> */}
                            <p className='my-6 text-justify md:text-left text-gray'><span className='text-theme font-semibold' > Plenora Architects </span> is a Vancouver-based studio practice focused on modern design, interiors and landscapes. From our inception in 2007, we have delivered exceptional public and private environments that are stimulating to occupy and fundamental to their surroundings. As a full-service firm, Measured is present on projects from start to finish, ensuring that the ideas conceived in the beginning with clients are manifest at the end. We achieve this through close collaboration with all members of the project team, including consultants, contractors, trades and artisans.</p>
                            {/* <a className='text-theme font-bold' href="">Read more</a> */}
                        </div>
                    </div>
                </div>
                {/* PLENORA----IN----YEARS */}
                <div className='w-5/6 mx-auto grid grid-cols-1 gap-6 md:gap-16 mb-12'>
                    <h1 className='text-theme text-3xl md:text-6xl font-bold mt-12'>Plenora in <br /> Years </h1>
                    {/* 2009--------- */}
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-6 items-center'>
                        <div className='col-span-1'>
                            <h1 className="text-gray text-4xl md:text-7xl font-bold">20<span className='text-theme text-6xl md:text-9xl '>09</span> </h1>
                        </div>
                        <div className='col-span-4 w-full md:w-5/6 ml-0 md:ml-20 text-justify'>
                            <h1 className="text-gray">With Clinton Cuddington at the helm, Plenora opens its doors as a full-service architecture firm with the objective of creating contemporary, environmentally sound buildings for both the private and public sectors.</h1>
                        </div>
                        <div className='col-span-4 md:col-span-1'>
                            <Image width={300} height={300} alt="2009" src={'https://i.ibb.co/dK4QX2L/2009.webp'} ></Image>
                        </div>
                    </div>
                    {/* 2014--------- */}
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-12 items-center'>
                        <div className='col-span-4 md:col-span-1'>
                            <Image width={300} height={300} alt="2009" src={'https://i.ibb.co/6D37WJS/2014.webp'} ></Image>
                        </div>
                        <div className='col-span-1'>
                            <h1 className="text-gray text-4xl md:text-7xl font-bold">20<span className='text-theme text-6xl md:text-9xl '>14</span> </h1>
                        </div>
                        <div className='col-span-4'>
                            <h1 className="text-gray w-full md:w-5/6 ml-0 md:ml-20 text-justify">Hardly a year old, Plenora receives a Lieutenant Governor of British Columbia Award of Merit for a Mayne Island retreat, completes Wolfe House, and wins Western Living Magazine’s inaugural Architecture Designer of the Year.</h1>
                        </div>

                    </div>
                    {/* 2022--------- */}
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-12 items-center'>
                        <div className='col-span-4'>
                            <h1 className="text-gray text-justify pr-0 md:pr-6">Plenora Architects wins the Architectural Institute of British Columbia Emerging Firm Award and, for the second time, Western Living Magazine’s Architecture Designer of the Year. This recognition highlights our innovative design approach and commitment to excellence in shaping modern architectural landscapes. </h1>
                        </div>
                        <div className='col-span-4 md:col-span-1'>
                            <Image width={300} height={300} alt="2009" src={'https://i.ibb.co/kysmnZw/2022.webp'} ></Image>
                        </div>
                        <div className='col-span-1'>
                            <h1 className="text-gray text-4xl md:text-7xl font-bold">20<span className='text-theme text-6xl md:text-9xl '>22</span> </h1>
                        </div>
                    </div>
                </div>
                <NewsLetter></NewsLetter>
            </PageWrapper>
        </div>
    );
};

export default page;