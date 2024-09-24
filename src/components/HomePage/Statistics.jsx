import Image from 'next/image';
import React from 'react';

const Statistics = () => {
    const Statistics = [
        {
            id: 1,
            title: "Years of Experience",
            number: "15+",
            image: "https://i.ibb.co/9t106pX/l1r.png"
        },
        {
            id: 2,
            title: "Success Projects",
            number: "600+",
            image: "https://i.ibb.co/XZN6kJt/l2-r.png"
        },
        {
            id: 3,
            title: "Team Members",
            number: "40+",
            image: "https://i.ibb.co/TcBQYL2/l3-removebg-preview-1.png"
        },
        {
            id: 4,
            title: "Clients Satisfaction",
            number: "500+",
            image: "https://i.ibb.co/m5P38Hn/l4-r.png"
        }
    ];
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative w-full  theme-bg

        // h-30vh bg-no-repeat bg-cover

        " 
        // style={{backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url('https://i.postimg.cc/fLXNf3SH/choose1.jpg')` }}
        >
             {Statistics.map((item,index)=>
                            <div key={item.id} className="grid grid-cols-1 gap-6 text-center p-12">
                            <div className='flex justify-center relative'>
                                <Image className='p-6 rounded_custom  ' width={150} height={160} alt='strategy-info' src={item.image}></Image>
                            </div>
                            <div  className='text-white'>
                                <h2 className=' text-base  md:text-xl font-bold'>{item.title}</h2>
                                <hr className='border-1 border-white mt-3 w-3/4 mx-auto' />
                                <p className=' text-2xl md:text-6xl font-bold my-2 text-center w-4/5 md:w-5/6 mx-auto'> {item.number} </p>
                            </div>
                        </div>
                        )}
        </div>
    );
};

export default Statistics;