"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const NavigateButton = ({text,path}) => {
    const router = useRouter();
    const handleNavigate = () =>{
        router.push(`${path}`);
    };
    return (
        <div>
             <button onClick={handleNavigate} className='btn btn-basic p-4 w-1/2 md:w-1/3 flex gap-2'>
                {text}
            </button>
        </div>
    );
};

export default NavigateButton;