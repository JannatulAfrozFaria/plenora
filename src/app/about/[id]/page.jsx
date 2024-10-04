import { Offers } from '@/lib/Offers';
import React from 'react';

const page = ({params}) => {
    const {id} = params;
    const offer = Offers.find(offer=>offer.id === id);
    return (
        <div>
            
        </div>
    );
};

export default page;