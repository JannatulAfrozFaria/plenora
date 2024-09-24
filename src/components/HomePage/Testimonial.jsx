import React from 'react';
import Title from '../utilityComponents/Title';

const Testimonial = () => {
    return (
        <div>
            <Title heading={'Our Happy Customers'} subHeading={'Testimonial'} ></Title>
            <p className='text-gray'>See what our happy clients are saying! Discover how we’ve transformed spaces into beautiful, functional designs they love.</p>
            <div key={member.id} className="relative w-full h-[30vh] bg-no-repeat bg-cover" style={{
                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(${member.image})`
            }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TeamMembers.slice(0, 3).map(member =>
                        <div key={member.id} className="relative w-full h-[30vh] md:h-[60vh] bg-no-repeat bg-cover" style={{
                            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(${member.image})`
                        }}
                        >
                            <div className='col-span-1 text-white absolute bottom-6 md:bottom-12 left-8 md:left-12 font-bold'>
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
        </div>
    );
};

export default Testimonial;