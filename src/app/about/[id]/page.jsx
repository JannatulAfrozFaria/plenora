// import NavigateButton from '@/components/utilityComponents/NavigateButton';
// import { Offers } from '@/lib/Offers';
// import Image from 'next/image';
// import React from 'react';

// const page = ({ params }) => {
//     const { id } = params;
//     const offer = Offers.find(offer => offer.id === id);
//     const { title, category, logo, images, headingsAndDescriptions, hashtags } = offer;
//     return (
//         <div>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//                 <div className="col-span-3 grid grid-cols-1">
//                     <div>
//                         <Image width={900} height={900} alt='offer-image' src={images.image1} ></Image>
//                     </div>
//                     <div className='p-8'>
//                         <h1 className='text-theme text-4xl font-bold'>{title} </h1>
//                         <div>{headingsAndDescriptions.slice(0, 1).map(item =>
//                             <div key={item.heading} >
//                                 <h1 className='text-gray font-semibold'> {item.heading} </h1>
//                                 <h1 className='text-gray '> {item.description} </h1>
//                             </div>
//                         )} </div>
//                     </div>
//                     <div>
//                         <NavigateButton configuration={'btn w-1/2 md:w-1/3  p-4 flex gap-2'} path={'/about'} text={'Go Back'}  ></NavigateButton>
//                     </div>
//                 </div>
//                 <div className="col-span-1">
//                     <div>
//                         <div>
//                             <Image width={900} height={900} alt='offer-image' src={images.image2} ></Image>
//                         </div>
//                         <div>{headingsAndDescriptions.slice(1, 2).map(item =>
//                             <div key={item.heading} >
//                                 <h1 className='text-gray font-semibold'> {item.heading} </h1>
//                                 <h1 className='text-gray '> {item.description} </h1>
//                             </div>
//                         )} </div>
//                     </div>
//                     <div>
//                         <div>
//                             <Image width={900} height={900} alt='offer-image' src={images.image3} ></Image>
//                         </div>
//                         <div>{headingsAndDescriptions.slice(2, 3).map(item =>
//                             <div key={item.heading} >
//                                 <h1 className='text-gray font-semibold'> {item.heading} </h1>
//                                 <h1 className='text-gray '> {item.description} </h1>
//                             </div>
//                         )} </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default page;

import NavigateButton from '@/components/utilityComponents/NavigateButton';
import { Offers } from '../../../lib/Offers';
import Image from 'next/image';
import React from 'react';

const page = ({ params }) => {
    const { id } = params;

    // Find the offer by id
    const offer = Offers.find(offer => offer.id == id);

    // Handle the case where the offer is not found
    if (!offer) {
        return <div className='p-24 mb-0 md:mb-48 text-xl md:text-3xl text-theme'>Not found! Please check the URL or go back to the About page.</div>;
    }

    // Destructure the offer object
    const { title, category, logo, images, headingsAndDescriptions, hashtags } = offer;

    return (
        <div className='w-5/6 mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 py-12">
                <div className="col-span-3 grid grid-cols-1">
                    <div>
                        <Image alt='offer-image' src={images.image1} width={900} height={400} />
                    </div>
                    <div>
                    <div className='grid grid-cols-3 gap-2 w-3/4  text-lg text-gray'>{hashtags.map((tag,index)=> <span key={index} >{tag} </span> )} </div>
                    </div>
                    <div className='pt-8 grid grid-cols-1'>
                        <h1 className='text-theme text-3xl md:text-6xl font-bold'>{title} </h1>
                        <div className='text-gray text-lg'>
                            <h1><span className='font-semibold'>Category:</span>  {category} </h1>
                        </div>
                        <div>{headingsAndDescriptions.slice(0, 1).map(item =>
                            <div key={item.heading}>
                                <h1 className='text-gray text-2xl font-semibold'> {item.heading} </h1>
                                <h1 className='text-gray text-justify my-4'> {item.description} </h1>
                            </div>
                        )} </div>
                        <div>
                            <NavigateButton configuration={'btn w-1/2 md:w-1/3  p-4 flex gap-2'} path={'/about'} text={'Go Back'} />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div>
                        <div>
                            <Image alt='offer-image' src={images.image2} width={500} height={300} />
                        </div>
                        <div>{headingsAndDescriptions.slice(1, 2).map(item =>
                            <div className='my-6' key={item.heading}>
                                <h1 className='text-xl text-gray font-semibold'> {item.heading} </h1>
                                <h1 className='text-gray text-justify'> {item.description} </h1>
                            </div>
                        )} </div>
                    </div>
                    <div>
                        <div>
                            <Image alt='offer-image' src={images.image3} width={500} height={300} />
                        </div>
                        <div>{headingsAndDescriptions.slice(2, 3).map(item =>
                            <div className='my-6' key={item.heading}>
                                <h1 className='text-xl text-gray font-semibold'> {item.heading} </h1>
                                <h1 className='text-gray text-justify'> {item.description} </h1>
                            </div>
                            )} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
