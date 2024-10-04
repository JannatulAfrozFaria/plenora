import NavigateButton from '@/components/utilityComponents/NavigateButton';
import { Offers } from '@/lib/Offers';
import Image from 'next/image';
import React from 'react';

const page = ({params}) => {
    const {id} = params;
    const offer = Offers.find(offer=>offer.id === id);
    const {title,category, logo, images, headingsAndDescriptions,hashtags} = offer;
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-3 grid grid-cols-1">
                    <div>
                        <Image alt='offer-image' src={images.image1} ></Image>
                    </div>
                    <div className='p-8'>
                        <h1 className='text-theme text-4xl font-bold'>{title} </h1>
                        <p>{headingsAndDescriptions.slice(0,1).map(item=>
                            <div key={item.heading} >
                                <h1 className='text-gray font-semibold'> {item.heading} </h1>
                                <h1 className='text-gray '> {item.description} </h1>
                            </div>
                        )} </p>
                    </div>
                    <div>
                        <NavigateButton></NavigateButton>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    );
};

export default page;