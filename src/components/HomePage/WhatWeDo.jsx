import React from 'react';

const WhatWeDo = () => {
    return (
        <div>
            <div>
                <h1 className='text-gray font-bold'>What we do</h1>
                <h2 className="text-theme text-3xl md:text-6xl">The best Services We Provide</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 relative w-full h-[90vh] bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url('https://i.postimg.cc/ZYvpyK9Q/back-ash.png')` }}>
                <div className="grid"></div>
               
            </div>
        </div>
    );
};

export default WhatWeDo;