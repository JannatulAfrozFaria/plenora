import React from 'react';

const ProcessLayOut02 = ({coverImage,gridImg1,gridImg2, heading, themeText, grayText}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='grid grid-col-1'>
                    <div className='flex'>
                        <div>
                            <Image height={400} width={396} alt='process_image' src={gridImg1} ></Image>
                        </div>
                        <div>
                            <Image height={500} width={500} alt='process_image' src={gridImg2} ></Image>
                        </div>
                    </div>
                    <div className='w-4/5 mx-auto p-10 md:p-0'>
                        <h1 className="text-theme font-black text-7xl ">{heading}</h1>
                        <p className='my-6 text-justify md:text-left'><span className='text-theme font-semibold' >{themeText}</span>{grayText}</p>
                    </div>
                </div>
                <div>
                    <Image height={900} width={800} alt='process_image' src={coverImage} ></Image>
                </div>
            </div>
        </div>
    );
};

export default ProcessLayOut02;