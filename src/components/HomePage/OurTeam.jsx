import React from 'react';
import Title from '../utilityComponents/Title';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";

const OurTeam = () => {
    const TeamMembers = [
        {
            id: 1,
            name: "John Smith",
            position: "Chief Executive Officer",
            image: "https://i.ibb.co/BVwr0YG/t1.webp"
        },
        {
            id: 2,
            name: "Emily Johnson",
            position: "Senior Architect",
            image: "https://i.ibb.co/zx41GcL/t2.webp"
        },
        {
            id: 3,
            name: "Michael Brown",
            position: "Lead Designer",
            image: "https://example.com/images/michael-brown.jpg"
        },
        {
            id: 4,
            name: "Sophia Williams",
            position: "Project Manager",
            image: "https://example.com/images/sophia-williams.jpg"
        },
        {
            id: 5,
            name: "David Garcia",
            position: "Structural Engineer",
            image: "https://example.com/images/david-garcia.jpg"
        },
        {
            id: 6,
            name: "Olivia Martinez",
            position: "Interior Designer",
            image: "https://example.com/images/olivia-martinez.jpg"
        },
        {
            id: 7,
            name: "James Wilson",
            position: "Senior Construction Manager",
            image: "https://example.com/images/james-wilson.jpg"
        },
        {
            id: 8,
            name: "Emma Taylor",
            position: "Landscape Architect",
            image: "https://example.com/images/emma-taylor.jpg"
        },
        {
            id: 9,
            name: "Daniel Harris",
            position: "Sustainability Consultant",
            image: "https://example.com/images/daniel-harris.jpg"
        },
        {
            id: 10,
            name: "Sophia Clark",
            position: "Urban Planner",
            image: "https://example.com/images/sophia-clark.jpg"
        },
        {
            id: 11,
            name: "Mia Lewis",
            position: "Junior Architect",
            image: "https://example.com/images/mia-lewis.jpg"
        },
        {
            id: 12,
            name: "Jacob Lee",
            position: "Electrical Engineer",
            image: "https://example.com/images/jacob-lee.jpg"
        },
        {
            id: 13,
            name: "Charlotte Walker",
            position: "Structural Engineer",
            image: "https://example.com/images/charlotte-walker.jpg"
        },
        {
            id: 14,
            name: "Mason Hall",
            position: "Site Supervisor",
            image: "https://example.com/images/mason-hall.jpg"
        },
        {
            id: 15,
            name: "Amelia Adams",
            position: "Design Consultant",
            image: "https://example.com/images/amelia-adams.jpg"
        },
        {
            id: 16,
            name: "Benjamin King",
            position: "Civil Engineer",
            image: "https://example.com/images/benjamin-king.jpg"
        },
        {
            id: 17,
            name: "Lucas Wright",
            position: "Junior Designer",
            image: "https://example.com/images/lucas-wright.jpg"
        },
        {
            id: 18,
            name: "Isabella Scott",
            position: "Interior Architect",
            image: "https://example.com/images/isabella-scott.jpg"
        },
        {
            id: 19,
            name: "Mason Green",
            position: "Building Information Modeler",
            image: "https://example.com/images/mason-green.jpg"
        },
        {
            id: 20,
            name: "Ava Roberts",
            position: "Marketing Director",
            image: "https://example.com/images/ava-roberts.jpg"
        },
        {
            id: 21,
            name: "Ethan Thompson",
            position: "Procurement Manager",
            image: "https://example.com/images/ethan-thompson.jpg"
        },
        {
            id: 22,
            name: "Abigail White",
            position: "Senior Quantity Surveyor",
            image: "https://example.com/images/abigail-white.jpg"
        },
        {
            id: 23,
            name: "Logan Moore",
            position: "Safety Engineer",
            image: "https://example.com/images/logan-moore.jpg"
        },
        {
            id: 24,
            name: "Charlotte Harris",
            position: "Finance Manager",
            image: "https://example.com/images/charlotte-harris.jpg"
        },
        {
            id: 25,
            name: "Elijah Martin",
            position: "Mechanical Engineer",
            image: "https://example.com/images/elijah-martin.jpg"
        },
        {
            id: 26,
            name: "Mia Thompson",
            position: "Junior Architect",
            image: "https://example.com/images/mia-thompson.jpg"
        },
        {
            id: 27,
            name: "James Anderson",
            position: "Environmental Consultant",
            image: "https://example.com/images/james-anderson.jpg"
        },
        {
            id: 28,
            name: "Avery Lopez",
            position: "Structural Engineer",
            image: "https://example.com/images/avery-lopez.jpg"
        },
        {
            id: 29,
            name: "William Jackson",
            position: "Site Foreman",
            image: "https://example.com/images/william-jackson.jpg"
        },
        {
            id: 30,
            name: "Sofia White",
            position: "Sustainability Analyst",
            image: "https://example.com/images/sofia-white.jpg"
        },
        {
            id: 31,
            name: "Henry Rodriguez",
            position: "Technical Architect",
            image: "https://example.com/images/henry-rodriguez.jpg"
        },
        {
            id: 32,
            name: "Liam Hernandez",
            position: "Construction Supervisor",
            image: "https://example.com/images/liam-hernandez.jpg"
        },
        {
            id: 33,
            name: "Ella Clark",
            position: "Lighting Designer",
            image: "https://example.com/images/ella-clark.jpg"
        },
        {
            id: 34,
            name: "Jack Martinez",
            position: "Quantity Surveyor",
            image: "https://example.com/images/jack-martinez.jpg"
        },
        {
            id: 35,
            name: "Amelia Lewis",
            position: "Architectural Technologist",
            image: "https://example.com/images/amelia-lewis.jpg"
        },
        {
            id: 36,
            name: "Alexander Walker",
            position: "Construction Project Manager",
            image: "https://example.com/images/alexander-walker.jpg"
        },
        {
            id: 37,
            name: "Sophie Young",
            position: "Building Surveyor",
            image: "https://example.com/images/sophie-young.jpg"
        },
        {
            id: 38,
            name: "Olivia Gonzalez",
            position: "Facade Engineer",
            image: "https://example.com/images/olivia-gonzalez.jpg"
        },
        {
            id: 39,
            name: "Benjamin Perez",
            position: "Urban Designer",
            image: "https://example.com/images/benjamin-perez.jpg"
        },
        {
            id: 40,
            name: "Charlotte Ramirez",
            position: "Planning Consultant",
            image: "https://example.com/images/charlotte-ramirez.jpg"
        }
    ];

    return (
        <div>
            <Title heading={'Creative Minds Shaping Inspiring Spaces Together'} subHeading={'Meet Our Team'} ></Title>
            <div className='grid grid-cols-1 gap-3 md:gap-6'>
                {TeamMembers.slice(0, 3).map(member =>
                    <div key={member.id} className="relative w-full h-[90vh] bg-no-repeat bg-cover" style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(${member.image})`
                    }}
                    >
                        <div className='col-span-1 text-white'>
                            <h1 className="text-3xl"> {member.name} </h1>
                            <h2 className="text-lg"> {member.position} </h2>
                            <div className="hidden hover:flex gap-2 text-white">
                                <div>
                                    <a href="https://www.linkedin.com/in/jannatul-afroz-faria-a61086318/"> <FaLinkedinIn /></a>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/profile.php?id=100000633748736"> <FaFacebookF /></a>
                                </div>
                                <div>
                                    <a href="https://www.instagram.com/afroz_faria03/"> <FaInstagram /></a>
                                </div>
                                <div>
                                    <a href="https://github.com/JannatulAfrozFaria"> <PiGithubLogoFill /></a>
                                </div>
                            </div>
                            {/* <Image width={50} height={60} alt='member-info' src={member.image}></Image> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurTeam;