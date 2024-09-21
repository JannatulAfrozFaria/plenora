import React from 'react';

const Banner = () => {
    const banners = [
        {
            title: "Innovative Interior and Exterior Designs",
            description: "We design spaces that merge functionality and aesthetics, both indoors and outdoors.",
            next: "#slide2",
            prev: "#slide4",
            image: ""
        },
        {
            title: "Crafting Timeless Spaces, Inside Out",
            description: "Our team creates lasting designs that blend elegance and efficiency for every environment.",
            next: "#slide3",
            prev: "#slide1",
            image: ""
        },
        {
            title: "Transforming Architecture, Inside and Outside",
            description: "From interiors to exteriors, we innovate and redefine how spaces are envisioned and built.",
            next: "#slide4",
            prev: "#slide2",
            image: ""
        },
        {
            title: "Designing Sustainable and Modern Spaces",
            description: "We focus on eco-friendly designs that bring modern, sustainable architecture to life.",
            next: "#slide1",
            prev: "#slide3",
            image: ""
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
                <div id="slide1" className="carousel-item relative w-full">
                    <div>
                        <h1>Project 1</h1>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;