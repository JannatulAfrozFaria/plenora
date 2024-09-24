import React from 'react';
import Title from '../utilityComponents/Title';
import Image from 'next/image';

const WorkingProcess = () => {
    const Strategies = [
        {
            id: 1,
            title: "Visit Project",
            description: "We conduct an initial site visit to understand the project’s requirements and scope.",
            image: "https://i.ibb.co/Wxn4R8q/p1.png"
        },
        {
            id: 2,
            title: "Planning Design",
            description: "Developing a comprehensive design plan based on client preferences and project goals.",
            image: "https://i.ibb.co/0GM1TpC/p2.png"
        },
        {
            id: 3,
            title: "Project Sketch",
            description: "Creating detailed sketches and blueprints to visualize the proposed architectural solutions.",
            image: "https://i.postimg.cc/SKZsv1dn/p3.png"
        },
        {
            id: 4,
            title: "Start Working",
            description: "Execution of the approved design with close monitoring of progress and quality.",
            image: "https://i.postimg.cc/FR7R5bCD/p4.png"
        }
    ];
    
    return (
        <div>
             <Title heading={'Our Working Strategy'} subHeading={'Working Process'} ></Title>
             <div className="grid grid-cols-4 gap-6">
             {Strategies.map(strategy=>
                            <div key={strategy.id} className="grid grid-cols-1 gap-6 text-center">
                            <div className='flex justify-center'>
                                <Image width={150} height={160} alt='strategy-info' src={strategy.image}></Image>
                            </div>
                            <div  className=''>
                                <h2 className='text-theme text-md  md:text-xl font-bold'>{strategy.title}</h2>
                                <p className=' text-sm md:text-base text-gray my-2 text-center'> {strategy.description} </p>
                            </div>
                        </div>
                        )}
             </div>
        </div>
    );
};

export default WorkingProcess;