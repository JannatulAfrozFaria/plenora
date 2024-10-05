"use client";
import NewsLetter from '@/components/HomePage/NewsLetter';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import { PageWrapper } from '../PageWrapper';
import AosConfig from '../../app/AosConfig';
import Title from '@/components/utilityComponents/Title';
import { Offers } from '@/lib/Offers';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
const AboutPage = () => {

    useEffect(() => {
        const text = document.querySelector('.text p');
        if (text) {
            text.innerHTML = text.innerText
                .split("")
                .map((char, i) => `<span style="transform:rotate(${i * 5}deg)">${char}</span>`)
                .join("");
        }
    }, []);
    return (
        <div>
            <AosConfig></AosConfig>
            <PageWrapper>
                {/* BANNER------ABOUT */}
                <div className="carousel-item relative w-full h-[50vh] md:h-[90vh] bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.3),rgba(0,0,0,0.2)), url('https://i.ibb.co/ggh4WzC/team8.jpg')`,
                    }}>
                    {/* https://i.ibb.co/qmqS5L6/About-Thumb.webp */}
                    <div>
                        <h1 className='absolute p-16 md:p-24 top-0 md:top-20 text-5xl md:text-9xl font-black text-white'>
                            Our{' '}
                            <br className='hidden md:block' />
                            <span className='text-theme'>
                                <Typewriter
                                    words={['Studio']}
                                    loop={true}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={3000}
                                />
                            </span>
                        </h1>
                    </div>
                </div>
                {/* ABOUT -----COMPANY----- */}
                <div className="w-5/6 mx-auto my-32 md:my-48">
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-16 items-center'>
                        <div className='col-span-2 relative'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="2500">
                            <Image className='border-white border-[12px] outline-gray-400 outline-2 outline-dashed' height={800} width={800} alt='process_image' src={'https://i.ibb.co/FKKFcHT/about-company-1.png'} ></Image>
                            <div className='absolute bottom-[85px] md:bottom-[140px] -right-[30px] md:-right-[190px]'>
                                <Image className='border-white border-[12px] outline-gray-400 outline-2 outline-dashed' height={600} width={300} alt='process_image' src={'https://i.ibb.co/w7r9Vy2/about-compan2.png'} ></Image>
                            </div>
                            <div className='hidden md:flex gap-2 items-center absolute bottom-[15px] md:bottom-[30px] -right-[174px] '>
                                <div>
                                    <h1 className='text-theme text-4xl font-bold'>70%</h1>
                                </div>
                                <div>
                                    <h1 className='text-gray text-lg'>Happy <br />Customer</h1>
                                </div>
                            </div>
                        </div>
                        <div className=""></div>
                        <div className='col-span-3 w-full mx-auto grid grid-cols-1'>
                            {/* TEXT------- */}
                            <div data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="20"
                                data-aos-duration="1500">
                                <h2 className='text-theme text-4xl md:text-3xl font-semibold mb-4'>About Company</h2>
                                <p className='text-gray text-xl md:text-5xl font-bold text-justify'>Creating Inspiring Spaces Discover Premier Interior Design Experts</p>
                                <p className='my-6 md:text-left text-gray text-justify'><span className='text-theme font-semibold' > Transform </span>your spaces with cutting-edge design. Our expert interior architects specialize in creating unique, inspiring environments that reflect your style and needs. Discover premier interior design services that bring creativity and functionality together for truly exceptional architecture and interiors.</p>
                            </div>
                            {/* Plus------- */}
                            <div className='grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-6 w-full md:w-5/6 items-center justify-between'
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="30"
                                data-aos-duration="2000">
                                <div className="circle col-span-1 md:col-span-2">
                                    <div className="logo"></div>
                                    <div className="text">
                                        <p>20 -- Years  -  Of -   Experience  -  In  --  Design --</p>
                                    </div>
                                </div>
                                <div className='col-span-1 md:col-span-3 grid grid-cols-1 space-y-6 text-sm md:text-base'>
                                    <p className='flex gap-2 items-center'><span className='text-theme text-2xl font-bold'><TiTick /></span> Avoiding Design Mistakes</p>
                                    <p className='flex gap-2 items-center'><span className='text-theme text-2xl font-bold'><TiTick /></span> Your Startup Design</p>
                                    <p className='flex gap-2 items-center'><span className='text-theme text-2xl font-bold'><TiTick /></span> Improve Font Comprehension</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* WHAT----WE----OFFER */}
                <div>
                    <Title heading={'We Are Experts In'} subHeading={'What We Offer'} ></Title>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-5/6 mx-auto"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="20"
                        data-aos-duration="2500">
                        {Offers.map(offer =>
                            <Link key={offer.id} href={`/about/${offer.id}`}>
                                <div >
                                    <div className='grid grid-cols-1 shadow-xl'>
                                        <div>
                                            <Image className='w-full' alt='offer-image' width={400} height={300} src={offer.images.image1}  ></Image>
                                        </div>
                                        <div className='p-4'>
                                            <p className='text-gray'> {offer.category} </p>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    {/* <Link key={offer.id} href={`/about/${offer.id}`}> */}
                                                        <h1 className="text-theme font-semibold text-xl">{offer.title}</h1>
                                                    {/* </Link> */}
                                                </div>
                                                <div>
                                                    <Image alt='offer-logo' width={50} height={50} src={offer.logo}></Image>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        )}
                    </div>
                </div>
                {/* INTRO----MOTTO-------SECTION--- */}
                <div className="w-5/6 mx-auto my-12">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center'>
                        <div data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="2500">
                            <Image height={900} width={900} alt='process_image' src={'https://i.ibb.co/VW7w3qp/coll2.png'} ></Image>
                        </div>
                        <div className='w-full mx-auto'
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="2000">
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
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-6 items-center'
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="20"
                        data-aos-duration="2500">
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
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-12 items-center'
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="20"
                        data-aos-duration="2000">
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
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-12 items-center'
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="20"
                        data-aos-duration="1500">
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

export default AboutPage;