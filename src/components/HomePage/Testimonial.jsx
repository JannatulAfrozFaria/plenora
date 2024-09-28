"use client"
import React from 'react';
import Title from '../utilityComponents/Title';
import { FaQuoteRight } from "react-icons/fa";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    // const customers1 = [
    //     {
    //         id: 1,
    //         name: "John Doe",
    //         profession: "CEO",
    //         companyLogo: "https://i.ibb.co/DDGrQ6d/logo2b.png",
    //         companyType: "Corporate",
    //         customerImage: "https://i.ibb.co/CP4ShLk/cus1.jpg",
    //         review: "The team transformed our office space into a modern, functional environment, perfectly aligned with our brand identity and motto."
    //     },
    //     {
    //         id: 2,
    //         name: "Jane Smith",
    //         profession: "Interior Designer",
    //         companyLogo: "https://i.ibb.co/mXftBsv/logo1b.png",
    //         companyType: "Design Studio",
    //         customerImage: "https://i.postimg.cc/J4Whxz7B/cus2.avif",
    //         review: "Their attention to detail and innovative designs truly brought our creative studio to life. Exceptional craftsmanship and professionalism."
    //     },
    //     {
    //         id: 3,
    //         name: "Michael Lee",
    //         profession: "Property Developer",
    //         companyLogo: "https://i.ibb.co/RYpPHbB/logo1.png",
    //         companyType: "Real Estate",
    //         customerImage: "https://i.postimg.cc/VLRzF9H3/cus3.jpg",
    //         review: "Working with this architecture firm was seamless. They created stunning, sustainable designs for our real estate projects."
    //     }
    // ];

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         // Initialize Tiny Slider after the component is mounted
    //         const slider = tns({
    //             container: '.my-slider',
    //             items: 1,
    //             slideBy: 'page',
    //             autoplay: true,               // Enable autoplay
    //             autoplayTimeout: 3000,        // Time between slides (3 seconds)
    //             autoplayButtonOutput: false,  // Hide the autoplay button
    //             controls: false,              // Disable the navigation arrows
    //             nav: true,                    // Show dot navigation
    //             speed: 500,                   // Slide transition speed
    //             loop: true                    // Enable looping
    //         });
    //     }
    // }, []);
    const customers = [
        {
            id: 1,
            name: "John Doe",
            profession: "CEO",
            companyLogo: "https://i.ibb.co/DDGrQ6d/logo2b.png",
            companyType: "Corporate",
            customerImage: "https://i.ibb.co/CP4ShLk/cus1.jpg",
            review: "The team transformed our office space into a modern, functional environment, perfectly aligned with our brand identity and motto."
        },
        {
            id: 2,
            name: "Jane Smith",
            profession: "Interior Designer",
            companyLogo: "https://i.ibb.co/mXftBsv/logo1b.png",
            companyType: "Design Studio",
            customerImage: "https://i.postimg.cc/J4Whxz7B/cus2.avif",
            review: "Their attention to detail and innovative designs truly brought our creative studio to life. Exceptional craftsmanship and professionalism."
        },
        {
            id: 3,
            name: "Michael Lee",
            profession: "Property Developer",
            companyLogo: "https://i.ibb.co/RYpPHbB/logo1.png",
            companyType: "Real Estate",
            customerImage: "https://i.postimg.cc/VLRzF9H3/cus3.jpg",
            review: "Working with this architecture firm was seamless. They created stunning, sustainable designs for our real estate projects."
        },
        {
            id: 4,
            name: "Sarah Adams",
            profession: "Marketing Director",
            companyLogo: "https://i.ibb.co/Z6LKFZp/logo4b.png",
            companyType: "Advertising Agency",
            customerImage: "https://i.postimg.cc/MZ9fr1wv/cus4.jpg",
            review: "Their team turned our office into a creative hub that fosters collaboration. It's a perfect space for innovation."
        },
        {
            id: 5,
            name: "David Carter",
            profession: "Tech Entrepreneur",
            companyLogo: "https://i.ibb.co/FDG9y6N/logo5b.png",
            companyType: "Tech Startup",
            customerImage: "https://i.postimg.cc/mgMcbp2L/cus5.jpg",
            review: "They designed our workspace to reflect our cutting-edge tech culture. It's modern, functional, and future-proofed."
        },
        {
            id: 6,
            name: "Emily Johnson",
            profession: "Boutique Owner",
            companyLogo: "https://i.ibb.co/rHv4G1N/logo6b.png",
            companyType: "Retail",
            customerImage: "https://i.postimg.cc/N0WkpRnY/cus6.jpg",
            review: "Our boutique's interior was transformed into a luxurious and welcoming space that truly resonates with our clientele."
        },
        {
            id: 7,
            name: "Robert Evans",
            profession: "Hotel Manager",
            companyLogo: "https://i.ibb.co/ydRbT6Y/logo7b.png",
            companyType: "Hospitality",
            customerImage: "https://i.postimg.cc/W4BmvNsF/cus7.jpg",
            review: "They redesigned our hotel's interior with elegance and comfort in mind. Our guests love the new modern aesthetic."
        },
        {
            id: 8,
            name: "Olivia Wilson",
            profession: "Restaurant Owner",
            companyLogo: "https://i.ibb.co/hCnFbY3/logo8b.png",
            companyType: "Hospitality",
            customerImage: "https://i.postimg.cc/ZKQQ7Nv2/cus8.jpg",
            review: "They gave our restaurant a unique ambiance that blends modern style with warmth. Customers can't stop complimenting it."
        },
        {
            id: 9,
            name: "William Harris",
            profession: "Fitness Club Owner",
            companyLogo: "https://i.ibb.co/Tk0dCn4/logo9b.png",
            companyType: "Fitness",
            customerImage: "https://i.postimg.cc/kMRNkRcH/cus9.jpg",
            review: "Their design for our fitness club maximized space while creating a dynamic, energy-filled environment for our members."
        },
        {
            id: 10,
            name: "Sophia Martinez",
            profession: "Gallery Curator",
            companyLogo: "https://i.ibb.co/BBP2ZwX/logo10b.png",
            companyType: "Art Gallery",
            customerImage: "https://i.postimg.cc/65mZ9n5y/cus10.jpg",
            review: "Their innovative use of space perfectly showcased our artwork, enhancing the visitor experience at the gallery."
        },
        {
            id: 11,
            name: "James Brown",
            profession: "Café Owner",
            companyLogo: "https://i.ibb.co/5LHFYGV/logo11b.png",
            companyType: "Hospitality",
            customerImage: "https://i.postimg.cc/tgH7T6yX/cus11.jpg",
            review: "They redesigned our café with a cozy, modern aesthetic that has significantly increased customer traffic."
        },
        {
            id: 12,
            name: "Grace Taylor",
            profession: "Event Planner",
            companyLogo: "https://i.ibb.co/sRLWcF1/logo12b.png",
            companyType: "Event Management",
            customerImage: "https://i.postimg.cc/1zgLgVPH/cus12.jpg",
            review: "Their thoughtful, functional designs transformed our event space into a versatile and visually stunning venue."
        }
    ];
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Default for desktop
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay every 3 seconds
        responsive: [
            {
                breakpoint: 1024, // For tablet devices
                settings: {
                    slidesToShow: 2, // Show 2 slides for tablets
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600, // For mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 slide for mobile
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div>
            <div className='pb-32 md:pb-20 mb-54 md:mb-64'>
                <div className="relative w-full h-[70vh] bg-no-repeat bg-cover" style={{
                    backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.8),rgba(0,0,0,0.9)), url('https://i.ibb.co/RDHBPW1/e1.jpg')`
                }}>
                    <div className='absolute top-10 md:top-20 left-5 md:left-20'>
                        <Title heading={'Our Happy Customers'} subHeading={'Testimonial'} ></Title>
                        <p className=' w-1/2 mx-auto text-center text-xl text-white mb-12'>See what our happy clients are saying! Discover how we’ve transformed spaces into beautiful, functional designs they love.</p>
                        {/* SLIDER------STARTS--------- */}
                        <div>
                            <div
                                className="grid grid-cols-1  gap-4 md:gap-6 justify-center w-5/6 mx-auto"
                            >
                                <Slider {...settings} >
                                    {customers.map(customer =>
                                        <div key={customer.id} className="">
                                            <div className=" bg-white grid grid-cols-1 p-4 md:p-8 border-2 border-gray-300 h-[40vh] md:h-[60vh]">
                                                <div className='flex gap-3'>
                                                    {/* PHOTO------- */}
                                                    <div>
                                                        <div className='flex justify-start relative'>
                                                            <div className="chat chat-start">
                                                                <div className="chat-image avatar">
                                                                    <div className=" w-16 rounded-full">
                                                                        <Image width={70} height={70}
                                                                            alt="Tailwind CSS chat bubble component"
                                                                            src={customer.customerImage} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-orange-500 rounded_custom p-1 absolute  top-1 left-12 md:left-11 text-white  "> <FaQuoteRight /> </div>
                                                        </div>
                                                    </div>
                                                    {/* INTRODUCTION------- */}
                                                    <div>
                                                        <h1 className="text-2xl">{customer.name} </h1>
                                                        <h2 className="text-lg">{customer.profession} </h2>
                                                    </div>
                                                </div>
                                                {/* REVIEW---------- */}
                                                <div>
                                                    <p className="text-base md:text-lg text-gray my-2 md:my-4">{customer.review} </p>
                                                </div>
                                                <hr className="border-2 text-gray " />
                                                {/* RATING -----SECTION */}
                                                <div className='flex justify-between items-end mt-2 md:mt-4'>
                                                    <div>
                                                        <Image width={50} height={50} src={customer.companyLogo} alt='company-logo'></Image>
                                                        <h1 className="text-md">{customer.companyType} </h1>
                                                    </div>
                                                    {/* RATING-----ICON */}
                                                    <div>
                                                        <div className="rating rating-md">
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                                            {/* <input
                                                    type="radio"
                                                    name="rating-8"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked /> */}
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                        {/* SLIDER------ENDS---------------- */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;