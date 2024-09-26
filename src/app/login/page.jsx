import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20 w-full h-[50vh] md:h-full bg-no-repeat bg-cover"
            style={{
                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url('https://i.ibb.co/NFqHwVQ/orange.jpg')`,
            }}
        >
            <div>
                <Image width={700} height={800} alt='loginImage' src={'https://i.ibb.co/KXc8VLX/login.jpg'}></Image>
            </div>
            <div></div>
        </div>
    );
};

export default page;