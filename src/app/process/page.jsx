import NewsLetter from '@/components/HomePage/NewsLetter';
import ProcessLayOut01 from '@/components/utilityComponents/ProcessLayOut01';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* BANNER------ABOUT */}
            <div className="carousel-item relative w-full h-[50vh] md:h-[90vh] bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.3),rgba(0,0,0,0.2)), url('https://i.postimg.cc/GhR0D9J8/process.webp')`,
                }}>
                <div>
                    <h1 className=" absolute p-12 md:p-24 top-10 md:top-20 txt-4xl md:text-9xl font-black text-white">Our <br /> <span className='text-theme'>Process</span></h1>
                </div>
            </div>
            {/* SERVICE----INTRO */}
            <div className="w-5/6 mx-auto my-12">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center'>

                    <div className='w-5/6 md:w-full mx-auto'>
                        <p className='my-6  text-justify md:text-left'> <span className='text-theme font-semibold'> As A </span>full-service architectural firm, Measured is engaged in every phase of a project from concept to completion, enabling the creation of environments (building, interiors and landscape) that facilitate the desires of clients. Our process ensures this. </p>
                    </div>
                    <div>
                        <Image height={900} width={900} alt='process_image' src={'https://i.ibb.co/zf3FjvF/process2.webp'} ></Image>
                    </div>
                </div>
            </div>
            {/* DISCOVER--------- */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <Image height={900} width={800} alt='process_image' src={'https://i.ibb.co/C8GDN41/process01.webp'} ></Image>
                </div>
                <div className='grid grid-col-1'>
                    <div className='flex'>
                        <div>
                            <Image height={400} width={396} alt='process_image' src={'https://i.ibb.co/f9y5CG5/process01a.webp'} ></Image>
                        </div>
                        <div>
                            <Image height={500} width={500} alt='process_image' src={'https://i.ibb.co/6tHcVj4/process01b.webp'} ></Image>
                        </div>
                    </div>
                    <div className='w-4/5 mx-auto p-10 md:p-0'>
                        <h1 className="text-theme font-black text-7xl ">Discover</h1>
                        <p className='my-6 text-justify md:text-left'><span className='text-theme font-semibold' > During discovery,</span> we work closely with clients to gain an understanding of your desires and needs, both the philosophical (how do you want to live?) and the practical (how many bedrooms and bathrooms?). We strive to learn what is important to you and work to protect that throughout the life of the project.</p>
                    </div>
                </div>
                
            </div>
            <ProcessLayOut01></ProcessLayOut01>
            {/* IMAGINE--------- */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='grid grid-col-1'>
                    <div className='flex'>
                        <div>
                            <Image height={400} width={396} alt='process_image' src={'https://i.ibb.co/pLZ92jF/imagine01.webp'} ></Image>
                        </div>
                        <div>
                            <Image height={500} width={500} alt='process_image' src={'https://i.ibb.co/5xzG31j/imagine02.webp'} ></Image>
                        </div>
                    </div>
                    <div className='w-4/5 mx-auto p-10 md:p-0'>
                        <h1 className="text-theme font-black text-7xl ">Imagine</h1>
                        <p className='my-6 text-justify md:text-left'><span className='text-theme font-semibold' > Here is</span>  where we get to work, composing ideas through schematic drawings that conceptually entrench the results of discovery. In close discussion with clients — and when required, the municipality — we refine these drawings until we have a master site plan, an estimated schedule and an estimated budget provided by a third-party quantity surveyor.</p>
                    </div>
                </div>
                <div>
                    <Image height={900} width={800} alt='process_image' src={'https://i.ibb.co/5cNN2Nt/imagine03.webp'} ></Image>
                </div>
            </div>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default page;