import { Offers } from '@/lib/Offers';
import React from 'react';

const page = ({params}) => {
    const {id} = params;
    const offer = Offers.find(offer=>offer.id === id);
    const {title,category, logo, images, headingsAndDescriptions,hashtags} = offer;
    return (
        <div>
            
        </div>
    );
};

export default page;