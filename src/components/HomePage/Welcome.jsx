import React from 'react';

const Welcome = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-8">
                <div className='absolute' style={{
                        backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(${banner.image})`,
                    }}>
                https://i.postimg.cc/Pr5rZCcz/welcome.jpg
                    <div className='relative'></div>
                    <div className='relative grid grid-cols-1 theme-bg '>

                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Welcome;