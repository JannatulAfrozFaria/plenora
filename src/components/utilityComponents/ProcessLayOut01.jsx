import React from 'react';

const ProcessLayOut01 = ({coverImage,gridImg1,gridImg2, heading, description}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <Image height={900} width={800} alt='process_image' src={coverImage} ></Image>
                </div>
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
                        <h1 className="text-theme font-black text-7xl ">Discover</h1>
                        <p className='my-6 text-justify md:text-left'><span className='text-theme font-semibold' > During discovery,</span> we work closely with clients to gain an understanding of your desires and needs, both the philosophical (how do you want to live?) and the practical (how many bedrooms and bathrooms?). We strive to learn what is important to you and work to protect that throughout the life of the project.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessLayOut01;