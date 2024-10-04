"use client";
import React, { useEffect } from 'react';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { Typewriter } from 'react-simple-typewriter';
import NavigateButton from '../utilityComponents/NavigateButton';
const Banner = () => {
    useEffect(() => {
        const applyRotationEffect = () => {
          const texts = document.querySelectorAll('.text1 p');
          texts.forEach(text => {
            if (text) {
              text.innerHTML = text.innerText
                .split("")
                .map((char, i) => `<span style="transform:rotate(${i * 5}deg)">${char}</span>`)
                .join("");
            }
          });
        };
        
        applyRotationEffect();
      }, []); 

    const banners = [
        {
            title: "Innovative Interior and Exterior Designs",
            description: "We blend aesthetics and functionality to create modern architectural designs that seamlessly integrate interior and exterior spaces.",
            next: "#slide2",
            prev: "#slide4",
            image: "https://i.postimg.cc/hthbgB8c/a11.jpg",
            btn: 'About',
            path: '/about'
        },
        {
            title: "Crafting Timeless Spaces, Inside Out",
            description: "We design elegant, lasting spaces by merging timeless architectural elements with modern functionality for personalized environments.",
            next: "#slide3",
            prev: "#slide1",
            image: "https://i.postimg.cc/vBwWWxJZ/a6.jpg",
            btn: ' View Projects',
            path: '/projects'
        },
        {
            title: "Transforming Architecture, Inside and Outside",
            description: "We redefine architecture by creating dynamic interior and exterior spaces that reflect modern trends and practical functionality.",
            next: "#slide4",
            prev: "#slide2",
            image: "https://i.postimg.cc/Y9xmYnNd/a4.webp",
            btn: 'Working Process',
            path: '/process'
        },
        {
            title: "Designing Sustainable and Modern Spaces",
            description: "We prioritize eco-friendly architecture, designing sustainable spaces that are both modern and environmentally conscious.",
            next: "#slide1",
            prev: "#slide3",
            image: "https://i.postimg.cc/7PnwkGzP/banner1.jpg",
            btn: 'Contact',
            path: '/contacts'
        }
    ];

    return (
        <div className='w-screen'>
            <div className="carousel w-full">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full h-[50vh] md:h-[90vh] bg-no-repeat bg-cover"
                        style={{
                            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(${banner.image})`,
                        }}
                    >
                        <div className='py-10 md:py-20 pl-10 md:pl-20 pr-10 md:pr-20 w-full md:w-5/6'>
                            <div className='grid grid-cols-1 md:grid-cols-6 gap-12 md:gap-32'>
                                <div className="col-span-5">
                                    <h1>
                                        {/* Life is simple{' '} */}
                                        <span className='text-4xl md:text-7xl banner-title'
                                        // style={{ color: 'red', fontWeight: 'bold' }}
                                        >
                                            <Typewriter
                                                words={[`${banner.title}`]}
                                                loop={true}
                                                // loop={5}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={3000}
                                            // onLoopDone={handleDone}
                                            // onType={handleType}
                                            />
                                        </span>
                                    </h1>
                                </div>
                                <div className="hidden md:block col-span-1 pl-0 md:pl-20">
                                    <div className="circle1 col-span-2">
                                        <div className="logo1"></div>
                                        <div className="text1">
                                            <p>20 -- Years  -  Of -   Experience  -  In  --  Design --</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* DESCRIPTION----BUTTON */}
                        <div className='absolute bottom-10 md:bottom-24 left-10 md:left-24'>
                            <p className='text-xl md:text-2xl banner-description w-full md:w-1/2'>{banner.description}</p>
                            <div className='w-full'>
                                <NavigateButton configuration={'btn-basic w-1/2 md:w-1/5 uppercase text-base md:text-2xl py-3 font-medium'} text={banner.btn} path={banner.path} ></NavigateButton>
                            </div>
                        </div>
                        {/* PREV-----NEXT------TOGGLE------ */}
                        <div className="absolute flex transform justify-between bottom-10 md:bottom-24 right-10 md:right-24 gap-2 ">
                            <a href={banner.prev} className="btn btn-circle bg-white text-gray">
                                <GrLinkPrevious />
                            </a>
                            <a href={banner.next} className="btn btn-circle bg-orange-600 text-white">
                                <GrLinkNext />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;


