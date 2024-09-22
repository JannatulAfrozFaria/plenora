import React from 'react';
import Banner from './Banner';
import Welcome from './Welcome';
import Process from './Process';
import FeaturedProject from './FeaturedProject';

const HomePage = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <div className="w-5/6 mx-auto">
                <Welcome></Welcome>
           </div>
           <FeaturedProject></FeaturedProject>
           <Process></Process>
        </div>
    );
};

export default HomePage;