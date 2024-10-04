import NewsLetter from '@/components/HomePage/NewsLetter';
import ProcessLayOut01 from '@/components/utilityComponents/ProcessLayOut01';
import ProcessLayOut02 from '@/components/utilityComponents/ProcessLayOut02';
import Image from 'next/image';
import React from 'react';
import { PageWrapper } from '../PageWrapper';
import AosConfig from '../../app/AosConfig';

const page = () => {
    return (
        <div>
            <AosConfig></AosConfig>
            <PageWrapper>
                {/* BANNER------ABOUT */}
                <div className="carousel-item relative w-full h-[50vh] md:h-[90vh] bg-no-repeat bg-cover"
                    // style={{
                    //     backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.3),rgba(0,0,0,0.2)), url('https://i.postimg.cc/GhR0D9J8/process.webp')`,
                    // }}
                    style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.2)), url('https://i.ibb.co/vhsk5C8/process-cover.jpg')`,
                    }}
                >
                    <div >
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
                        <h1 className=" absolute p-12 md:p-24 top-10 md:top-20 text-7xl md:text-9xl font-black text-white">Design <br /> <span className='text-theme'>Process</span></h1>
                    </div>
                </div>
                {/* SERVICE----INTRO */}
                <div className="w-5/6 mx-auto my-12">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center'>
                        <div className='w-full mx-auto'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="2000"
                        >
                            <p className='my-6 text-justify text-gray'> <span className='text-theme font-semibold'> As a </span>full-service architectural firm, Plenora Architects is engaged in every phase of a project from concept to completion, enabling the creation of environments (building, interiors and landscape) that facilitate the desires of clients. Our process ensures this. </p>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="20"
                            data-aos-duration="1500"
                        >
                            <Image height={900} width={900} alt='process_image'
                                // src={'https://i.ibb.co/zf3FjvF/process2.webp'} 
                                src={'https://i.ibb.co/rxgcVzp/discuss-2.png'}
                            ></Image>
                        </div>
                    </div>
                </div>
                {/* DISCOVER--------- */}
                <ProcessLayOut01 numberString={'1'}
                    // coverImage={'https://i.ibb.co/C8GDN41/process01.webp'} 
                    coverImage={'https://i.ibb.co/dcqXKMx/Presentation2.png'}
                    // gridImg1={'https://i.ibb.co/f9y5CG5/process01a.webp'} 
                    gridImg1={'https://i.ibb.co/Kw8QRFx/img2.png'}
                    // gridImg2={'https://i.ibb.co/6tHcVj4/process01b.webp'} 
                    gridImg2={'https://i.ibb.co/k2CcYjq/Slide3.png'}
                    heading={'Discover'} themeText={'During discovery,'} grayText={'we work closely with clients to gain an understanding of your desires and needs, both the philosophical (how do you want to live?) and the practical (how many bedrooms and bathrooms?). We strive to learn what is important to you and work to protect that throughout the life of the project.'}> </ProcessLayOut01>
                {/* IMAGINE--------- */}
                <ProcessLayOut02 numberString={'2'}
                    // coverImage={'https://i.ibb.co/5cNN2Nt/imagine03.webp'} 
                    // coverImage={'https://i.ibb.co/vCWMNkf/i2.png'} 
                    coverImage={'https://i.ibb.co/S5qRBRL/Slide2.png'}
                    // gridImg1={'https://i.ibb.co/pLZ92jF/imagine01.webp'} 
                    gridImg1={'https://i.ibb.co/PWTrZ4x/img-2.png'}
                    // gridImg2={'https://i.ibb.co/5xzG31j/imagine02.webp'} 
                    gridImg2={'https://i.ibb.co/wyPLBfP/imagine-a.png'}
                    heading={'Imagine'} themeText={'Here is '} grayText={'where we get to work, composing ideas through schematic drawings that conceptually entrench the results of discovery. In close discussion with clients — and when required, the municipality — we refine these drawings until we have a master site plan, an estimated schedule and an estimated budget provided by a third-party quantity surveyor.'}> </ProcessLayOut02>
                {/* DEVELOP--------- */}
                <ProcessLayOut01 numberString={'3'}
                    // coverImage={'https://i.ibb.co/3WSg6T6/Develop-COver.webp'} 
                    coverImage={'https://i.ibb.co/889k3DT/3d-rendering-stadium.jpg'}
                    // gridImg1={'https://i.ibb.co/YRXWfKq/develop01.webp'} 
                    gridImg1={'https://i.ibb.co/dt8SV43/dev1.jpg'}
                    // gridImg2={'https://i.ibb.co/MGvs82g/develop02.webp'} 
                    gridImg2={'https://i.ibb.co/Kb3Vs6M/img-3.png'}
                    heading={'Develop'} themeText={'Now we'} grayText={'prepare formal drawings that are submitted for permit to the municipality. By now, the budget has transitioned to a chosen builder and the schedule further clarified by the client, architect and general contractor. While waiting for municipality approval, we also complete the detailed construction documentation required for the builder.'}> </ProcessLayOut01>
                {/* MANAGE----------- */}
                <ProcessLayOut02 numberString={'4'}
                    coverImage={'https://i.ibb.co/3sPYYXF/Manage-Cover.webp'}
                    // gridImg1={'https://i.ibb.co/KqMkBtg/Manage02.webp'} 
                    gridImg1={'https://i.ibb.co/ZgRyJ3N/manage-2.png'}
                    // gridImg2={'https://i.ibb.co/44TgN34/Manage01.webp'} 
                    gridImg2={'https://i.ibb.co/2KwZfjC/2.png'}
                    heading={'Manage'} themeText={'Once building '} grayText={'commences, we provide construction administration, which includes both field reviews and billing oversight. We ensure that the general contractor is building what we’ve designed and has been approved by the municipality, and we work together on solutions for conditions that could not have been foreseen and are in keeping with the original intent of the project.'}> </ProcessLayOut02>
            </PageWrapper>
            <div className='mt-12 md:mt-0'>
                <NewsLetter></NewsLetter>
            </div>

        </div>
    );
};

export default page;