import Image from 'next/image';
import React from 'react';
import AosConfig from '../../app/AosConfig';

const ProcessLayOut02 = ({coverImage,gridImg1,gridImg2, heading, themeText, grayText,numberString}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='grid grid-col-1 '>
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
                        <p className='my-6 text-justify md:text-left text-gray'><span className='text-theme font-semibold' >{themeText}</span>{grayText}</p>
                    </div>
                </div>
                <div className='relative'
                data-aos="flip-up" data-aos-delay="50" data-aos-duration="1600"
                data-aos-offset="200" data-aos-easing="ease-in-out">
                    <Image height={900} width={800} alt='process_image' src={coverImage} ></Image>
                   <div >
                        <h1 className='absolute -top-[85px] md:-top-[171px] -right-0 md:right-20 pr-4 md:pr-20 text-[100px] md:text-[200px] text-white font-black'>0<span className='text-theme'>{numberString}</span> </h1>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessLayOut02;