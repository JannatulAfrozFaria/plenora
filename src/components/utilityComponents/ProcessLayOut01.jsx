import Image from 'next/image';
import React from 'react';

const ProcessLayOut01 = ({coverImage,gridImg1,gridImg2, heading, themeText, grayText,numberString}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:my-0'>
                <div className='relative'>
                    <Image height={900} width={800} alt='process_image' src={coverImage} ></Image>
                    <h1 className='absolute -top-[85px] md:-top-[171px] -left-0 md:left-20 pl-4 md:pl-20 text-[100px] md:text-[200px] text-white font-black'>0<span className='text-theme'>{numberString}</span> </h1>
                </div>
                <div className='grid grid-col-1'>
                    <div className='flex'>
                        <div>
                            <Image height={500} width={500} alt='process_image' src={gridImg1} ></Image>
                        </div>
                        <div>
                            <Image height={500} width={500} alt='process_image' src={gridImg2} ></Image>
                        </div>
                    </div>
                    <div className='w-full md:w-4/5 mx-auto p-10 md:p-0'>
                        <h1 className="text-theme font-black text-7xl ">{heading}</h1>
                        <p className='my-6 text-justify md:text-left text-gray'><span className='text-theme font-semibold' >{themeText}</span> {grayText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessLayOut01;