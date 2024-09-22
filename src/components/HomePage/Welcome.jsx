import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import { IoBuild } from "react-icons/io5";

const Welcome = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-12 p-12 items-center">
                {/* Image Section------- */}
                <div className='relative w-full h-[90vh] bg-no-repeat bg-cover' 
                style={{
                    backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.2),rgba(0,0,0,0.3)), url("https://i.postimg.cc/Pr5rZCcz/welcome.jpg")`,
                }}
                    >
                
                    <div className='absolute top-12 right-12 bg-white text-gray p-5 flex gap-4 items-center font-semibold border-t-4 border-t-orange-600'>
                        <h1 className='text-5xl'>20</h1>
                        <h1 className='text-2xl '> Years of <br />Experience </h1>
                    </div>
                    {/* ICONS________ */}
                    <div className='absolute top-1/3 left-(-9) grid grid-cols-1 gap-8  theme-bg text-white text-2xl'>
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
                </div>
                {/* Writing------Section */}
                <div>
                    <h1 className='text-2xl text-theme font-medium'>Welcome to Plenora</h1>
                    <h2 className='text-4xl font-bold  text-gray w-5/6 my-6'>Architectural Design with Different Approach</h2>
                    <p className=""> Explore our architecture and design hub, where innovative concepts and inspiring spaces come to life. Discover creative solutions that transform visions into reality, crafting the perfect environment for your needs. Let us craft the perfect environment for your needs.</p>
                    {/* Progress Section */}
                    <div className='grid grid-cols-1 gap-6 my-12'>
                        <div>
                            <h6>Exterior Architecture</h6>
                            <progress className="progress  progress-error " value="90" max="100"></progress>
                        </div>
                        <div>
                            <h6>Interior Design</h6>
                            <progress className="progress progress-error " value="80" max="100"></progress>
                        </div>
                        <div>
                            <h6>3D Design</h6>
                            <progress className="progress progress-error " value="95" max="100"></progress>
                        </div>
                    </div>
                    <div className='w-full'>
                        <button className='btn btn-basic p-4 w-1/3 flex gap-2'>
                                <a href="/services"> Services</a>
                                 <IoBuild /> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;