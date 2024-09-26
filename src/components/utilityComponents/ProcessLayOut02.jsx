import React from 'react';

const ProcessLayOut02 = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='grid grid-col-1'>
                    <div className='flex'>
                        <div>
                            <Image height={400} width={396} alt='process_image' src={'https://i.ibb.co/pLZ92jF/imagine01.webp'} ></Image>
                        </div>
                        <div>
                            <Image height={500} width={500} alt='process_image' src={'https://i.ibb.co/5xzG31j/imagine02.webp'} ></Image>
                        </div>
                    </div>
                    <div className='w-4/5 mx-auto p-10 md:p-0'>
                        <h1 className="text-theme font-black text-7xl ">Imagine</h1>
                        <p className='my-6 text-justify md:text-left'><span className='text-theme font-semibold' > Here is</span>  where we get to work, composing ideas through schematic drawings that conceptually entrench the results of discovery. In close discussion with clients — and when required, the municipality — we refine these drawings until we have a master site plan, an estimated schedule and an estimated budget provided by a third-party quantity surveyor.</p>
                    </div>
                </div>
                <div>
                    <Image height={900} width={800} alt='process_image' src={'https://i.ibb.co/5cNN2Nt/imagine03.webp'} ></Image>
                </div>
            </div>
        </div>
    );
};

export default ProcessLayOut02;