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
                        <div className="grid grid-cols-1 p-8">
                            <div className='flex gap-3'>
                                <div></div>
                                <div></div>
                            </div>
                            <div></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;