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
        </div>
    );
};

export default page;