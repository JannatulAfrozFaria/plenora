import React from 'react';
import Title from '../utilityComponents/Title';
import { FaQuoteRight } from "react-icons/fa";
import Image from 'next/image';
const Testimonial = () => {
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
        }
    ];

    return (
        <div className='pb-96 md:pb-20 mb-96 md:mb-64'>

            <div className="relative w-full h-[70vh] bg-no-repeat bg-cover" style={{
                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.8),rgba(0,0,0,0.9)), url('https://i.ibb.co/RDHBPW1/e1.jpg')`
            }}>
                <div className='absolute top-10 md:top-20 left-5 md:left-20'>
                    <Title heading={'Our Happy Customers'} subHeading={'Testimonial'} ></Title>
                    <p className=' w-1/2 mx-auto text-center text-xl text-white mb-12'>See what our happy clients are saying! Discover how we’ve transformed spaces into beautiful, functional designs they love.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-center w-5/6 mx-auto">
                        {customers.map(customer =>
                            <div key={customer.id} className=" bg-white grid grid-cols-1 p-4 md:p-8 border-2 border-gray-300">
                                <div className='flex gap-3'>
                                    {/* PHOTO------- */}
                                    <div>
                                        <div className='flex justify-start relative'>
                                            {/* <Image className='p-6 rounded_custom  ' width={150} height={160} alt='strategy-info' src={customer.image}></Image> */}
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
                                        <Image width={50} height={50} src={customer.companyLogo}></Image>
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
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;