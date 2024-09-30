import NewsLetter from '@/components/HomePage/NewsLetter';
import Title from '@/components/utilityComponents/Title';
import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { PageWrapper } from '../PageWrapper';
import AosConfig from '../../app/AosConfig';
const page = () => {
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
            image: "https://i.postimg.cc/VLRzF9H3/cus3.jpg"
        }
    ];
    return (
        <div>
            <AosConfig> </AosConfig>
            <PageWrapper>
                <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-5  gap-8 mb-12 md:mb-20'>
                    <div className='col-span-4 text-[40px] md:text-[90px] p-12 bg-no-repeat bg-cover'
                    style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.8),rgba(0,0,0,0.4)), url('https://i.ibb.co/SNrF212/cover2.webp')`,
                    }}
                    data-aos="zoom-in-right"
                    data-aos-offset="200"
                    data-aos-delay="40"
                    data-aos-duration="1800"
                    data-aos-easing="ease-in-out">
                        <h1 className='text-gray-300 '>Start the  <br />
                            Conversation</h1>
                        <h1 className='text-theme font-bold text-[40px] md:text-[100px]'>T: 604.737.0235
                            build@plenora.ca</h1>
                    </div>
                    <div className='col-span-4 md:col-span-1 text-justify text-white grid grid-cols-1 gap-4 items-center p-6'
                     style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.6),rgba(0,0,0,0.8)), url('https://i.ibb.co/QDNKqpG/model-3d.jpg')`,
                    }}
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="40"
                    data-aos-duration="1800"
                    data-aos-easing="ease-in-out">
                        <div className=''>
                            <h1 className="text-theme font-bold">Plenora Architects Ltd.</h1>
                            <p> #410-1639 West 2nd Avenue <br />
                                Vancouver, BC <br />
                                Canada V6J 1H3</p>
                            <a href="https://www.google.ca/maps/place/1639+W+2nd+Ave,+Vancouver,+BC+V6J+1H3/@49.2699915,-123.1440888,17z/data=!3m1!4b1!4m5!3m4!1s0x548673c96f4a8f7b:0x89c8b0ca78f7ea82!8m2!3d49.269988!4d-123.1419001">Get Directions</a>
                        </div>
                        <div>
                            <h1 className="text-theme font-bold">Follow us</h1>
                            <a className='hover:text-theme hover:underline' href="https://www.instagram.com/">Instagram</a>
                        </div>
                        <div>
                            <h1 className="text-theme font-bold">Press inquiries</h1>
                            <p> #410-1639 West 2nd Avenue <span> <a className='text-theme hover:underline' href="mailto:build@measured.ca">build@measured.ca</a></span></p>
                        </div>
                        <div>
                            <h1 className="text-theme font-bold">Careers</h1>
                            <p>Plenora Architects is always on the lookout for dedicated and enthusiastic architects and intern architects to join our team. Please send your CV, Project Links, and necessary details including portfolio to <span> <a className='hover:text-theme hover:underline' href="mailto:jobs@measured.ca">jobs@measured.ca</a></span></p>
                        </div>
                    </div>
                </div>
                {/* TEAM MEMBERS-------- */}
                <Title heading={'Meet Our Team'} subHeading={'Creative Minds Shaping Together'} ></Title>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6'
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="40"
                data-aos-duration="1800"
                data-aos-easing="ease-in-out">
                    {TeamMembers.slice(0, 15).map(member =>
                        <div key={member.id} className="relative w-full h-[30vh] md:h-[60vh] bg-no-repeat bg-cover group" style={{
                            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(${member.image})`
                        }}
                        >
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
                                    View Details
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className='mt-12 md:mt-24'>
                    <NewsLetter></NewsLetter>
                </div>
            </PageWrapper>
        </div>

    );
};

export default page;