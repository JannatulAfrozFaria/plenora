import React from 'react';
import Title from '../utilityComponents/Title';

const WhyChooseUs = () => {
    const Expertise = [
        {
            id: 1,
            title: "Modern Design",
            description: "We offer innovative and modern designs that blend functionality with aesthetic appeal in every project.",
            image: "https://example.com/images/modern-design.jpg"
        },
        {
            id: 2,
            title: "Expert Team",
            description: "Our experienced architects and designers deliver top-quality, client-focused solutions for any architectural challenge.",
            image: "https://example.com/images/expert-team.jpg"
        },
        {
            id: 3,
            title: "Reasonable Price",
            description: "We provide cost-effective solutions without compromising on quality, ensuring value for every investment.",
            image: "https://example.com/images/reasonable-price.jpg"
        }
    ];
    
    return (
        <div>
            <Title heading={'Why choose Plenora Architects'} subHeading={'Why choose Us'} ></Title>
            <div className='grid grid-cols-2 gap-12 items-center'>
                <div className='grid grid-cols-1 gap-6'>

                </div>
                <div></div>
            </div>
        </div>
    );
};

export default WhyChooseUs;