"use client"
import ThemeButton from '@/components/utilityComponents/ThemeButton';
import Title from '@/components/utilityComponents/Title';
import Image from 'next/image';
import React from 'react';
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PageWrapper } from '../PageWrapper';
import AosConfig from '../../app/AosConfig';
const page = () => {
    const handleLogin = async () => {

    }
    return (
        <div>
            <AosConfig></AosConfig>
            <PageWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20 w-full h-[50vh] md:h-full bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url('https://i.ibb.co/NFqHwVQ/orange.jpg')`,
                    }}>
                    <div 
                     data-aos="fade-right"
                     data-aos-offset="200"
                     data-aos-delay="40"
                     data-aos-duration="1800"
                     data-aos-easing="ease-in-out">
                        <Image width={700} height={800} alt='loginImage' src={'https://i.ibb.co/KXc8VLX/login.jpg'}></Image>
                    </div>
                    <div className='border-2 p-12 bg-gray-100 text-gray'>
                        <Title heading={'Login'}></Title>
                        <form onSubmit={handleLogin} action=""
                         data-aos="fade-up"
                         data-aos-offset="200"
                         data-aos-delay="40"
                         data-aos-duration="1800"
                         data-aos-easing="ease-in-out">
                            <label className='' htmlFor="email">Email</label>
                            <input type="text" name='email' placeholder="Your email" className="input input-bordered w-full my-3 " />
                            <br />
                            <label className='' htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered w-full my-3 " />
                            <br />
                            <div className='w-full'>
                                <button type='submit' className='btn btn-basic p-4 w-full my-6 '>
                                    <a href="/process">Login</a>
                                </button>
                            </div>
                        </form>
                        <div>
                            <h1 className="text-center">Or Sign in with</h1>
                            <div className="flex gap-6 justify-center items-center my-6">
                                <div><button className=' text-theme text-4xl'><AiFillGoogleCircle /></button></div>
                                <div><button className=' text-theme text-4xl'><FaGithub /></button></div>
                                <div><button className=' text-theme text-4xl'><FaFacebook /></button></div>
                            </div>
                            <h1 className="text-center">Not Have Account? <a className='text-theme font-bold' href="/signup">Sign Up!</a> </h1>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </div>

    );
};

export default page;