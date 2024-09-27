import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
import Title from '../utilityComponents/Title';
const MarqueeSlide = () => {
    const row1 = [
        { id: 1, firmName: "Skyline", firmType: "Art & Design", image: "https://i.postimg.cc/nhPFJZ7H/fr9-removebg-preview.png" },
        { id: 2, firmName: "UrbanMinds", firmType: "Art & Design", image: "https://i.postimg.cc/Y9KLBtyv/fr1-removebg-preview.png" },
        { id: 3, firmName: "Visionary", firmType: "Art & Design", image: "https://i.postimg.cc/kXHzM5jh/fr6.png" },
        { id: 4, firmName: "Inspire", firmType: "Art & Design", image: "https://i.postimg.cc/LsKWfbFt/fr2.png" },
        { id: 5, firmName: "Canvas", firmType: "Art & Design", image: "https://i.postimg.cc/Ls3xP4TS/fr3.png" },
        { id: 6, firmName: "AvantGarde", firmType: "Art & Design", image: "https://i.postimg.cc/k5JpftDG/fr13.png" },
        { id: 7, firmName: "Fusion", firmType: "Art & Design", image: "https://i.postimg.cc/rmdgPGTV/fr11-removebg-preview.png" },
        { id: 8, firmName: "ModernMuse", firmType: "Art & Design", image: "https://i.postimg.cc/GtwPgZzK/fr7-removebg-preview.png" }
    ];

    const row2 = [
        { id: 9, firmName: "Crafted", firmType: "Art & Design", image: "https://i.postimg.cc/6qQ9DSw7/logo3-removebg-preview.png" },
        { id: 10, firmName: "Harmony", firmType: "Art & Design", image: "https://i.ibb.co/j5wm5jX/logo2-removebg-preview.png" },
        { id: 11, firmName: "Echo", firmType: "Art & Design", image: "https://i.ibb.co/XY7b1kG/fr8-removebg-preview.png" },
        { id: 12, firmName: "Illusion", firmType: "Art & Design", image: "https://i.ibb.co/9VLcw3g/fr5-removebg-preview.png" },
        { id: 13, firmName: "BoldBrush", firmType: "Art & Design", image: "https://i.ibb.co/rsbfMN0/fr10-removebg-preview.png" },
        { id: 14, firmName: "Phoenix", firmType: "Art & Design", image: "https://i.ibb.co/1MZtcZ5/fr16-removebg-preview.png" },
        { id: 15, firmName: "Elemental", firmType: "Art & Design", image: "https://i.ibb.co/w65Ldyc/f14-removebg-preview.png" },
        { id: 16, firmName: "CreativeEdge", firmType: "Art & Design", image: "https://i.ibb.co/ThYFsJP/fr4-removebg-preview.png" }
    ];
    return (
        <div>
            <Title></Title>
            <Marquee pauseOnClick={true} pauseOnHover={true} className='bg-gray-200 p-10 border border-y-4 border-orange-600'>
                {
                    row2.map(item => (
                        <div key={item.id} className='flex gap-4 px-10 items-end'>
                            <div>
                                <Image width={70} height={70} src={item.image}></Image>
                            </div>
                            <div className=''>
                                <h1 className="text-theme text-4xl">{item.firmName} </h1>
                                <p className='text-gray text-xl'>{item.firmType} </p>
                            </div>
                        </div>
                    ))
                }
            </Marquee>
            <Marquee pauseOnClick={true} pauseOnHover={true} direction="right"  speed={30} className='bg-gray-100 p-10 border border-b-4 border-orange-600'>
                {
                    row1.map(item => (
                        <div key={item.id} className='flex gap-4 px-10 items-end'>
                            <div>
                                <Image width={70} height={70} src={item.image}></Image>
                            </div>
                            <div className='e'>
                                <h1 className="text-theme text-4xl">{item.firmName} </h1>
                                <p className='text-gray text-xl'>{item.firmType} </p>
                            </div>
                        </div>
                    ))
                }
            </Marquee>
        </div>

    );
};

export default MarqueeSlide;