import React from 'react';
import Title from '../utilityComponents/Title';
import { FaQuoteRight } from "react-icons/fa";
import Image from 'next/image';
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

    return (
        <div>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"
                />
                {/* IE8 Polyfills */}
                {/*[if (lt IE 9)]>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.helper.ie8.js"></script>
        <![endif]*/}
            </Head>
            {/* CONTENT------STARTS--------- */}
            <div className='pb-96 md:pb-20 mb-96 md:mb-64'>
                <div className="relative w-full h-[70vh] bg-no-repeat bg-cover" style={{
                    backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.8),rgba(0,0,0,0.9)), url('https://i.ibb.co/RDHBPW1/e1.jpg')`
                }}>
                    <div className='absolute top-10 md:top-20 left-5 md:left-20'>
                        <Title heading={'Our Happy Customers'} subHeading={'Testimonial'} ></Title>
                        <p className=' w-1/2 mx-auto text-center text-xl text-white mb-12'>See what our happy clients are saying! Discover how we’ve transformed spaces into beautiful, functional designs they love.</p>
                        {/* SLIDER------STARTS--------- */}
                        <div className="my-slider">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-center w-5/6 mx-auto">
                                {customers.slice(0, 3).map(customer =>
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
                                )}
                            </div>
                        </div>
                        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-center w-5/6 mx-auto">
                            {customers.slice(0, 3).map(customer =>
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
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
            {/* SLIDER END--------------------- */}
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"
                strategy="afterInteractive"
            />
        </div>
    );
};

export default Testimonial;