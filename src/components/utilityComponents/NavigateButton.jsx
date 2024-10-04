"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const NavigateButton = ({configuration,text,path,icon}) => {
    const router = useRouter();
    const handleNavigate = () =>{
        router.push(`${path}`);
    };
    return (
        <div>
             <button onClick={handleNavigate} className={`btn-basic ${configuration}`}>
                {text} <div>{icon}</div>
            </button>
        </div>
    );
};

export default NavigateButton;