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
                        <Image alt='offer-image'></Image>
                    </div>
                    <h1>{title} </h1>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
    );
};

export default page;