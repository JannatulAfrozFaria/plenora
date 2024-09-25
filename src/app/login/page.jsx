import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
                <Image width={500} height={800} alt='loginImage' src={'https://i.ibb.co/KXc8VLX/login.jpg'}></Image>
            </div>
            <div></div>
        </div>
    );
};

export default page;