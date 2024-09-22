import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Welcome = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-8">
                <div className='relative' style={{
                        backgroundImage: `url('https://i.postimg.cc/Pr5rZCcz/welcome.jpg')`,
                    }}>
                
                    <div className='absolute'></div>
                    <div className='absolute top-1/3 left-(-5) grid grid-cols-1 theme-bg '>
                    <div><a href="https://www.facebook.com/profile.php?id=100000633748736"> <FaFacebookF /></a></div>
                        <div><FaInstagram /></div>
                        <div><FaLinkedinIn /></div>
                        <div><FaInstagram /></div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Welcome;