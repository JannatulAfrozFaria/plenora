import React from 'react';
import ThemeButton from '../utilityComponents/ThemeButton';

const Banner = () => {
    const banners = [
        {
            title: "Innovative Interior and Exterior Designs",
            description: "We design spaces that merge functionality and aesthetics, both indoors and outdoors.",
            next: "#slide2",
            prev: "#slide4",
            image: "https://i.postimg.cc/hthbgB8c/a11.jpg",
            btn: 'About',
            path: '/about'
        },
        {
            title: "Crafting Timeless Spaces, Inside Out",
            description: "Our team creates lasting designs that blend elegance and efficiency for every environment.",
            next: "#slide3",
            prev: "#slide1",
            image: "https://i.postimg.cc/vBwWWxJZ/a6.jpg",
            btn: 'Services' ,
            path: '/services'
        },
        {
            title: "Transforming Architecture, Inside and Outside",
            description: "From interiors to exteriors, we innovate and redefine how spaces are envisioned and built.",
            next: "#slide4",
            prev: "#slide2",
            image: "https://i.postimg.cc/Y9xmYnNd/a4.webp",
            btn: 'View Projects' ,
            path: '/projects'
        },
        {
            title: "Designing Sustainable and Modern Spaces",
            description: "We focus on eco-friendly designs that bring modern, sustainable architecture to life.",
            next: "#slide1",
            prev: "#slide3",
            image: "https://i.postimg.cc/7PnwkGzP/banner1.jpg",
            btn: 'Contact' ,
            path: '/contact'
        },
        // {
        //     title: "Elegant Architecture, From Inside to Outside",
        //     description: "Our designs focus on creating seamless transitions between indoor comfort and outdoor beauty.",
        //     next: "#slide2",
        //     prev: "#slide4",
        //     image: ""
        // }
    ];

    return (
        <div>
            <div className="carousel w-full">
                {banners.map((banner,index) =>
                    (<div key={index} id="slide1" className="carousel-item relative w-full h-screen">
                        <div style={{ backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(${banner.image})` }}
                        >
                            <h1>{banner.title}</h1>
                            <p> {banner.description} </p>
                            <ThemeButton path={banner.path} title={`${banner.btn}`} ></ThemeButton>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Banner;