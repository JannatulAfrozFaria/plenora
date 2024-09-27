import React from 'react';
import signUp from '../../../public/assets/images/login.svg'
import Image from 'next/image';

const page = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20 w-full h-[50vh] md:h-full bg-no-repeat bg-cover"
        // style={{
        //     backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url('https://i.ibb.co/NFqHwVQ/orange.jpg')`,
        // }}
    >
        <div>
            <Image width={700} height={800} alt='loginImage' src={signUp}></Image>
        </div>
        <div className='border-2 p-12  text-gray'>
            <Title heading={'Login'}></Title>
            <label className='' htmlFor="email">Email</label>
            <input type="text" name='email' placeholder="Your email" className="input input-bordered w-full my-3 " />
            <br />
            <label className='' htmlFor="password">Password</label>
            <input type="password" name='password' placeholder="Your password" className="input input-bordered w-full my-3 " />
            <br />
            <div className='w-full'>
                    <button className='btn btn-basic p-4 w-full my-6 '>
                            <a href="/process">Login</a>
                    </button>
            </div>
            <div>
                <h1 className="text-center">Or Sign in with</h1>
                <div className="flex gap-6 justify-center items-center my-6">
                    <div><button className=' text-theme text-4xl'><AiFillGoogleCircle /></button></div>
                    <div><button className=' text-theme text-4xl'><FaGithub /></button></div>
                    <div><button className=' text-theme text-4xl'><FaFacebook /></button></div>
                </div>
                <h1 className="text-center">Already Have an Account? <a className='text-theme font-bold' href="/login">Login!</a> </h1>
            </div>
        </div>
    </div>
    );
};

export default page;