import React from 'react';
import Banner from './Banner';
import Welcome from './Welcome';
import Process from './Process';
import FeaturedProject from './FeaturedProject';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';
import WorkingProcess from './WorkingProcess';

const HomePage = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <div className="w-5/6 mx-auto">
                <Welcome></Welcome>
           </div>
           <div className='mt-12 '>
                <FeaturedProject></FeaturedProject>
           </div>
           <Process></Process>
           <div className=" w-5/6 mx-auto my-16">
                <WhatWeDo></WhatWeDo>
           </div>
           <div className=" w-5/6 mx-auto mb-16">
           <WhyChooseUs></WhyChooseUs>
           </div>
           <div className=" w-5/6 mx-auto mb-16">
           <WorkingProcess></WorkingProcess>
           </div>
          
        </div>
    );
};

export default HomePage;