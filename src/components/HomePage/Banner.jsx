import React from 'react';
import ThemeButton from '../utilityComponents/ThemeButton';
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
const Banner = () => {
    // const banners = [
    //     {
    //         title: "Innovative Interior and Exterior Designs",
    //         description: "We design spaces that merge functionality and aesthetics, both indoors and outdoors.",
    //         next: "#slide2",
    //         prev: "#slide4",
    //         image: "https://i.postimg.cc/hthbgB8c/a11.jpg",
    //         btn: 'About',
    //         path: '/about'
    //     },
    //     {
    //         title: "Crafting Timeless Spaces, Inside Out",
    //         description: "Our team creates lasting designs that blend elegance and efficiency for every environment.",
    //         next: "#slide3",
    //         prev: "#slide1",
    //         image: "https://i.postimg.cc/vBwWWxJZ/a6.jpg",
    //         btn: 'Services' ,
    //         path: '/services'
    //     },
    //     {
    //         title: "Transforming Architecture, Inside and Outside",
    //         description: "From interiors to exteriors, we innovate and redefine how spaces are envisioned and built.",
    //         next: "#slide4",
    //         prev: "#slide2",
    //         image: "https://i.postimg.cc/Y9xmYnNd/a4.webp",
    //         btn: 'View Projects' ,
    //         path: '/projects'
    //     },
    //     {
    //         title: "Designing Sustainable and Modern Spaces",
    //         description: "We focus on eco-friendly designs that bring modern, sustainable architecture to life.",
    //         next: "#slide1",
    //         prev: "#slide3",
    //         image: "https://i.postimg.cc/7PnwkGzP/banner1.jpg",
    //         btn: 'Contact' ,
    //         path: '/contact'
    //     },
    //     // {
    //     //     title: "Elegant Architecture, From Inside to Outside",
    //     //     description: "Our designs focus on creating seamless transitions between indoor comfort and outdoor beauty.",
    //     //     next: "#slide2",
    //     //     prev: "#slide4",
    //     //     image: ""
    //     // }
    // ];
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
                {banners.map((banner, index) =>
                (<div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-[50vh] md:h-[90vh] bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(${banner.image})`,
                        // width: '100vw',  maxWidth: '100%', 
                        // objectFit: 'cover',
                        // height: 'auto', backgroundSize: 'cover'
                    }}
                >
                    <div className='p-10 md:p-20  w-full md:w-5/6'>
                        <h1 className='text-4xl md:text-8xl banner-title'>{banner.title}</h1>
                        <p className='text-xl  md:text-2xl banner-description w-full md:w-5/6'> {banner.description} </p>
                        <div className='w-full'>
                            {/* <ThemeButton padding={' px-10 md:px-20 text-base md: text-2xl'}  size={'btn-md'} path={banner.path} text={`${banner.btn}`  } ></ThemeButton> */}
                            <button className='btn-white w-1/2 md:w-1/5 uppercase text-base md:text-2xl py-3 font-medium'>
                                <a href={banner.path}>{banner.btn}</a>
                            </button>
                        </div>
                    </div>
                    <div className="absolute flex transform justify-between bottom-10 md:bottom-24 right-10 md:right-24 gap-2 ">
                        <a href={banner.prev} className="btn btn-circle bg-white text-gray ">
                            <GrLinkPrevious />
                        </a>
                        <a href={banner.next} className="btn btn-circle bg-orange-600 text-white">
                            <GrLinkNext />
                        </a>
                    </div>
                </div>
                )
                )}
            </div>
        </div>
    );
};

export default Banner;