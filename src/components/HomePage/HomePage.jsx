import React from 'react';
import Banner from './Banner';
import Welcome from './Welcome';

const HomePage = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <div className="w-5/6 mx-auto">
                <Welcome></Welcome>
           </div>
        </div>
    );
};

export default HomePage;