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
                    <p className="text-gray">Welcome to our architecture and design hub! Explore innovative designs, inspiring spaces, and creative solutions that transform visions into reality. Let us craft the perfect environment for your needs.</p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;