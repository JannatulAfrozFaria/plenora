import React from 'react';

const Statistics = () => {
    const Statistics = [
        {
            id: 1,
            title: "Years of Experience",
            number: "15+",
            image: "https://example.com/images/years-experience.jpg"
        },
        {
            id: 2,
            title: "Success Projects",
            number: "600+",
            image: "https://example.com/images/success-projects.jpg"
        },
        {
            id: 3,
            title: "Team Members",
            number: "40+",
            image: "https://example.com/images/team-members.jpg"
        },
        {
            id: 4,
            title: "Clients Satisfaction",
            number: "500+",
            image: "https://example.com/images/client-satisfaction.jpg"
        }
    ];
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative w-full h-30vh bg-no-repeat bg-cover" style={{backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url('https://i.postimg.cc/fLXNf3SH/choose1.jpg')` }}>

             {Statistics.map((item,index)=>
                            <div key={item.id} className="grid grid-cols-1 gap-6 text-center">
                            <div className='flex justify-center relative'>
                                <Image className='p-6 rounded_custom  ' width={150} height={160} alt='strategy-info' src={item.image}></Image>
                            </div>
                            <div  className=''>
                                <h2 className='text-theme text-md  md:text-xl font-bold'>{item.title}</h2>
                                <p className=' text-sm md:text-base text-gray my-2 text-center w-4/5 md:w-5/6 mx-auto'> {item.number} </p>
                            </div>
                        </div>
                        )}
        </div>
    );
};

export default Statistics;