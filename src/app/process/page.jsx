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
                        <Image height={900} width={900} alt='process_image' src={'https://i.ibb.co/cJQfVGX/About-1.webp'} ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;