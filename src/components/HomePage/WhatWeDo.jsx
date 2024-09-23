import Image from 'next/image';
import React from 'react';
import { GrLinkNext } from "react-icons/gr";
import Title from '../utilityComponents/Title';

const WhatWeDo = () => {
    
        const services = [
          {
            "id": 1,
            "heading": "Home Interior Design",
            "description": "Transform your home with personalized interior designs, blending style and functionality.",
            "image": "https://i.postimg.cc/1XpzWC2N/icona1-removebg-preview.png"
          },
          {
            "id": 2,
            "heading": "Home Exterior Design",
            "description": "Enhance your home's curb appeal with modern, stylish exterior design solutions.",
            "image": "https://i.postimg.cc/3N9sJ2Dc/icona2-removebg-preview.png"
          },
          {
            "id": 3,
            "heading": "2D/3D Design Layout",
            "description": "Visualize your space with our advanced 2D and 3D design layouts for a clear picture.",
            "image": "https://i.postimg.cc/nch8SSyb/icona3-removebg-preview.png"
          },
          {
            "id": 4,
            "heading": "Furniture's Design",
            "description": "Custom furniture designs tailored to fit your space and style preferences seamlessly.",
            "image": "https://i.postimg.cc/fbX1SG9X/iconb1-removebg-preview.png"
          },
          {
            "id": 5,
            "heading": "Modern Home Interior",
            "description": "Bring modern elegance to your home with sleek, contemporary interior design solutions.",
            "image": "https://i.postimg.cc/DwhxYSJW/iconb2-removebg-preview.png"
          },
          {
            "id": 6,
            "heading": "Custom Design Plan",
            "description": "Get personalized design plans that suit your unique vision and lifestyle needs perfectly.",
            "image": "https://i.postimg.cc/mghP4wFK/iconb3-removebg-preview.png"
          }
        ]
      
      
    return (
        <div >
            <Title heading={'What we do'} subHeading={'The best Services We Provide'} ></Title>
            <div className="relative w-full h-[90vh] bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `url('https://i.postimg.cc/ZYvpyK9Q/back-ash.png')` }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 absolute top-1/5 left-1/5 p-6 md:p-16 ">
                    {services.map(service=>
                         <div key={service.id} className="grid grid-cols-5">
                         <div className='col-span-1'>
                            <Image width={50} height={60} alt='service-info' src={service.image}></Image>
                         </div>
                         <div  className='col-span-4'>
                             <h2 className='text-theme text-md  md:text-xl font-bold'>{service.heading}</h2>
                             <p className=' text-sm md:text-base text-gray my-2 text-justify'> {service.description} </p>
                             <div className='text-gray font-semibold'>
                                <button > 
                                    <a className='flex gap-2 items-center' href="/services">
                                    <span>Read More</span>
                                    <span><GrLinkNext /></span>
                                     </a> 
                                </button>
                             </div>
                         </div>
                     </div>
                    )}
                        <hr className='absolute top-1/2' />
                </div>
               
            </div>
        </div>
    );
};

export default WhatWeDo;