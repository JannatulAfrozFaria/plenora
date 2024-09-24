import React from 'react';

const WorkingProcess = () => {
    const Strategies = [
        {
            id: 1,
            title: "Visit Project",
            description: "We conduct an initial site visit to understand the project’s requirements and scope.",
            image: "https://i.postimg.cc/KjCmyd3Y/p1.png"
        },
        {
            id: 2,
            title: "Planning Design",
            description: "Developing a comprehensive design plan based on client preferences and project goals.",
            image: "https://i.postimg.cc/wjQ3hjsc/p2.png"
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
            image: "https://example.com/images/start-working.jpg"
        }
    ];
    
    return (
        <div>
             <Title heading={'Our Working Strategy'} subHeading={'Working Process'} ></Title>
             <div className="grid grid-cols-4 gap-6">
                <div></div>
             </div>
        </div>
    );
};

export default WorkingProcess;