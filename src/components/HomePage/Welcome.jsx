import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";

const Welcome = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-8">
                <div className='relative' style={{
                        backgroundImage: `url('https://i.postimg.cc/Pr5rZCcz/welcome.jpg')`,
                    }}>
                
                    <div className='absolute top-12 right-12'>
                        <h1 className='bg-white text-gray p-8'>Experience of <br /> 20 Years</h1>
                    </div>
                    <div className='absolute top-1/3 left-(-5) grid grid-cols-1 theme-bg '>
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
                <div>
                    <h1 className='text-2xl'>Welcome to Plenora</h1>
                    <h2 className='text-4xl font-bold'>Architectural Design with Different Approach</h2>
                    <p className="text-gray"> Explore our architecture and design hub, where innovative concepts and inspiring spaces come to life. Discover creative solutions that transform visions into reality, crafting the perfect environment for your needs. Let us craft the perfect environment for your needs.</p>
                    <div className='grid grid-cols-1'>
                        <div>
                            <h6>Exterior Architecture</h6>
                            <progress className="progress text-theme w-56" value="90" max="100"></progress>
                        </div>
                        <div>
                            <h6>Exterior Architecture</h6>
                            <progress className="progress progress-error w-56" value="80" max="100"></progress>
                        </div>
                        <div>
                            <h6>Exterior Architecture</h6>
                            <progress className="progress progress-error w-56" value="100" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;