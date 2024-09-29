"use client";
import React from 'react';
import Title from '../utilityComponents/Title';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import Link from 'next/link';

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
            image: "https://i.ibb.co/gznDq59/t13.webp"
        },
        {
            id: 3,
            name: "Michael Brown",
            position: "Lead Designer",
            image: "https://i.ibb.co/DK15P59/t3.webp"
        },
        {
            id: 4,
            name: "Sophia Williams",
            position: "Project Manager",
            image: "https://i.ibb.co/m4RzVn9/t4.webp"
        },
        {
            id: 5,
            name: "David Garcia",
            position: "Structural Engineer",
            image: "https://i.ibb.co/nBzBK5Q/t5.webp"
        },
        {
            id: 6,
            name: "Olivia Martinez",
            position: "Interior Designer",
            image: "https://i.ibb.co/mNrq8R2/t6.webp"
        },
        {
            id: 7,
            name: "James Wilson",
            position: "Senior Construction Manager",
            image: "https://i.ibb.co/NNHBwwM/t7.webp"
        },
        {
            id: 8,
            name: "Emma Taylor",
            position: "Landscape Architect",
            image: "https://i.ibb.co/N6GJVTV/t8.webp"
        },
        {
            id: 9,
            name: "Daniel Harris",
            position: "Sustainability Consultant",
            image: "https://i.ibb.co/XCpp42C/t9.webp"
        },
        {
            id: 10,
            name: "Sophia Clark",
            position: "Urban Planner",
            image: "https://i.ibb.co/n7NmT7V/t10.webp"
        },
        {
            id: 11,
            name: "Mia Lewis",
            position: "Junior Architect",
            image: "https://i.ibb.co/z8KXTPL/t11.webp"
        },
        {
            id: 12,
            name: "Jacob Lee",
            position: "Electrical Engineer",
            image: "https://i.ibb.co/nj7ZGH4/2009.webp"
        },
        {
            id: 13,
            name: "Charlotte Walker",
            position: "Structural Engineer",
            image: "https://i.ibb.co/7vvHbGf/cus6.jpg"
        },
        {
            id: 14,
            name: "Mason Hall",
            position: "Site Supervisor",
            image: "https://i.ibb.co/H2N4Xw9/cus5.jpg"
        },
        {
            id: 15,
            name: "Amelia Adams",
            position: "Design Consultant",
            image: "https://i.ibb.co/chhfgnV/cus4.jpg"
        },
        {
            id: 16,
            name: "Benjamin King",
            position: "Civil Engineer",
            image: "https://i.ibb.co/R6y0q5W/cus7.jpg"
        }
    ];

    return (
        <div>
            <Title heading={'Meet Our Team'} subHeading={'Creative Minds Shaping Together'} ></Title>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6'
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                {TeamMembers.slice(13,16).map(member =>
                    <div key={member.id} className="relative w-full h-[30vh] md:h-[60vh] bg-no-repeat bg-cover group" style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.5),rgba(0,0,0,0.1)), url(${member.image})`
                    }}
                    >
                        {/* linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), */}
                        <div className="absolute bottom-6 md:bottom-12 left-8 md:left-12 text-white font-bold transition-transform duration-300 group-hover:translate-y-[-70px]">
                            <h1 className="text-3xl"> {member.name} </h1>
                            <h2 className="text-lg"> {member.position} </h2>
                        </div>
                            {/* Social icons and Details button (Initially hidden, shown on hover) */}
                        <div className="absolute bottom-6 md:bottom-12 left-8 md:left-12 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-y-[0] transform translate-y-[50px]">
                            {/* Social Icons */}
                            <div className="flex gap-2 text-white">
                                <a href="https://www.linkedin.com/in/jannatul-afroz-faria-a61086318/"><FaLinkedinIn /></a>
                                <a href="https://www.facebook.com/profile.php?id=100000633748736"><FaFacebookF /></a>
                                <a href="https://www.instagram.com/afroz_faria03/"><FaInstagram /></a>
                                <a href="https://github.com/JannatulAfrozFaria"><PiGithubLogoFill /></a>
                            </div>

                            {/* View Details Button */}
                            <button className="mt-4 bg-orange-600 hover:bg-white text-white hover:text-orange-600 rounded-lg btn-sm">
                               <Link href={'/contacts'}> See All</Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurTeam;