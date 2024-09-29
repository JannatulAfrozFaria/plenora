"use client";
import React from 'react';
import Title from '../utilityComponents/Title';
import Image from 'next/image';
// import AosConfig from '@/app/AosConfig';
import AosConfig from '../../app/AosConfig';

const WorkingProcess = () => {
    const Strategies = [
        {
            id: 1,
            title: "Visit Project",
            description: "We conduct an initial site visit to understand the project’s requirements and scope.",
            image: "https://i.ibb.co/LRH1n80/p1a.png"
        },
        {
            id: 2,
            title: "Planning Design",
            description: "Developing a comprehensive design plan based on client preferences and project goals.",
            image: "https://i.ibb.co/kDKCd62/p2-a.png"
        },
        {
            id: 3,
            title: "Project Sketch",
            description: "Creating detailed sketches and blueprints to visualize the proposed architectural solutions.",
            image: "https://i.ibb.co/hBrs7Fx/p3-a.png"
        },
        {
            id: 4,
            title: "Start Working",
            description: "Execution of the approved design with close monitoring of progress and quality.",
            image: "https://i.ibb.co/1qnx7Xz/p4-a.png"
        }
    ];

    return (
        <div>
            <Title heading={'Our Working Strategy'} subHeading={'Working Process'} ></Title>
            {/* <AosConfig> */}
                <div className="grid  grid-cols-1 md:grid-cols-4 gap-6">
                    {Strategies.map((strategy, index) =>
                        <div key={strategy.id} className="grid grid-cols-1 gap-6 text-center">
                            <div className='flex justify-center relative'
                             data-aos="zoom-in-down"
                             data-aos-offset="200"
                             data-aos-delay="20"
                             data-aos-duration="2500">
                                <Image className='p-6 rounded_custom  ' width={150} height={160} alt='strategy-info' src={strategy.image}></Image>
                                <div className="bg-orange-500 rounded_custom py-1 px-3 absolute  top-4 left-24 md:left-16 text-white  ">{index + 1} </div>
                            </div>
                            <div data-aos="zoom-in-left"
                             data-aos-offset="200"
                             data-aos-delay="40"
                             data-aos-duration="1500">
                                <h2 className='text-theme text-md  md:text-xl font-bold'>{strategy.title}</h2>
                                <p className=' text-sm md:text-base text-gray my-2 text-center w-4/5 md:w-5/6 mx-auto'> {strategy.description} </p>
                            </div>
                        </div>
                    )}
                </div>
            {/* </AosConfig> */}
        </div>
    );
};

export default WorkingProcess;