"use client";
import React from 'react';
import Title from '../utilityComponents/Title';
import Image from 'next/image';

const WhyChooseUs = () => {
    const Expertise = [
        {
            id: 1,
            title: "Modern Design",
            description: "We offer innovative and modern designs that blend functionality with aesthetic appeal in every project.",
            image: "https://i.postimg.cc/RC632GK8/c1-removebg-preview.png"
        },
        {
            id: 2,
            title: "Expert Team",
            description: "Our experienced architects and designers deliver top-quality, client-focused solutions for any architectural challenge.",
            image: "https://i.postimg.cc/RZ9N6By5/c2-removebg-preview.png"
        },
        {
            id: 3,
            title: "Reasonable Price",
            description: "We provide cost-effective solutions without compromising on quality, ensuring value for every investment.",
            image: "https://i.postimg.cc/MG3TFjTq/c3-removebg-preview.png"
        }
    ];
    
    return (
        <div>
            <Title heading={'Why choose Plenora Architects'} subHeading={'Why choose Us'} ></Title>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                {/* EXPERTISE ------LIST------ */}
                <div className='grid grid-cols-1 gap-3 md:gap-6 w-full md:w-4/5'>
                    {Expertise.map(service=>
                            <div key={service.id} className="grid grid-cols-5">
                            <div className='col-span-1'>
                                <Image width={50} height={60} alt='service-info' src={service.image}></Image>
                            </div>
                            <div  className='col-span-4'>
                                <h2 className='text-theme text-md  md:text-xl font-bold'>{service.title}</h2>
                                <p className=' text-sm md:text-base text-gray my-2 text-justify'> {service.description} </p>
                            </div>
                        </div>
                        )}
                </div>
                {/* IMAGE------SECTION------ */}
                <div className='grid grid-cols-2 gap-3 md:gap-6'>
                    <div className="relative w-full h-full bg-no-repeat bg-cover bottom-right"
                    style={{
                        backgroundImage: `url('https://i.postimg.cc/fLXNf3SH/choose1.jpg')` }}>

                    </div>
                    {/* <div className='h-full'>
                        <Image width={500} height={1200} src={'https://i.postimg.cc/fLXNf3SH/choose1.jpg'} ></Image>
                    </div> */}
                    <div className='grid grid-cols-1 gap-3 md:gap-6'>
                        <Image className='top_left' width={500} height={450} src={'https://i.postimg.cc/NfbwDvLw/choose2.jpg'} ></Image>
                        <Image className='top_right' width={500} height={450} src={'https://i.postimg.cc/MpTJr3jf/choose3.jpg'} ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;