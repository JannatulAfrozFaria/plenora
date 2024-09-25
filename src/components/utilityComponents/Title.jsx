import React from 'react';

const Title = ({heading,subHeading}) => {
    return (
        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="3000">
             <div className='text-center mb-6'>
                <h1 className='text-gray font-bold mb-2'>{subHeading}</h1>
                <h2 className="text-theme text-2xl md:text-5xl mb-4 md:mb-6">{heading}</h2>
            </div>
        </div>
    );
};

export default Title;