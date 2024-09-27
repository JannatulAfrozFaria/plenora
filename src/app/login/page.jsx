import ThemeButton from '@/components/utilityComponents/ThemeButton';
import Title from '@/components/utilityComponents/Title';
import Image from 'next/image';
import React from 'react';
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const page = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20 w-full h-[50vh] md:h-full bg-no-repeat bg-cover"
            style={{
                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url('https://i.ibb.co/NFqHwVQ/orange.jpg')`,
            }}
        >
            <div>
                <Image width={700} height={800} alt='loginImage' src={'https://i.ibb.co/KXc8VLX/login.jpg'}></Image>
            </div>
            <div className='border-2 p-12'>
                <Title heading={'Login'}></Title>
                <label className='mb-3' htmlFor="email">Email</label>
                <input type="text" name='email' placeholder="Your email" className="input input-bordered w-full " />
                <br />
                <label className='mb-3' htmlFor="password">Password</label>
                <input type="password" name='password' placeholder="Your password" className="input input-bordered w-full " />
                <br />
                <button className='btn '>Login</button>
                <ThemeButton width={'w-full'} size={'btn-lg'} text={'Login'} padding={'p-4'}></ThemeButton>
                <div>
                    <h1 className="text-center">Or Sign in with</h1>
                    <div className="flex">
                        {/* <div>
                            <a href="https://www.linkedin.com/in/jannatul-afroz-faria-a61086318/"> <FaLinkedinIn /></a>
                        </div> */}
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100000633748736"> <AiFillGoogleCircle /></a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100000633748736"> <FaFacebook /></a>
                        </div>
                        {/* <div>
                            <a href="https://www.instagram.com/afroz_faria03/"> <FaInstagram /></a>
                        </div> */}
                        <div>
                            <a href="https://github.com/JannatulAfrozFaria"> <FaGithub /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;