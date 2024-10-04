'use client';
import { React, useEffect } from 'react';
import Lottie from "lottie-react";
import error2 from "../../public/lottieFiles/error.json";
import NavigateButton from '@/components/utilityComponents/NavigateButton';

// export default function Error({ error, reset }) {
//   useEffect(() => {
//     console.error(error)
//   }, [error])

//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <button onClick={
//           () => reset()}>
//         Try again
//       </button>
//     </div>
//   )
// }
const error = () => {
    return (
        <div>
            <section className='bg-white '>
                <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
                    <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
                        <p className='p-3 w-1/2 md:w-2/3 text-sm font-medium text-orange-500 rounded-full bg-blue-50 '>
                            <Lottie animationData={error2} loop={true} />
                        </p>
                        <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
                            There was some error!!!
                        </h1>
                        <p className='mt-4 text-gray-500 '>For help, You can opt for :</p>

                        <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
                            <NavigateButton configuration={'btn btn-basic uppercase text-base md:text-2xl font-medium'} text={'Go to Home'} path={'/'} ></NavigateButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default error;

// const Error = () => {

//     return (
//       <section className='bg-white '>
//         <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
//           <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
//             <p className='p-3 w-1/2 md:w-2/3 text-sm font-medium text-orange-500 rounded-full bg-blue-50 '>
//                 <Lottie animationData={error2} loop={true} />
//             </p>
//             <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
//               There was some error!!!
//             </h1>
//             <p className='mt-4 text-gray-500 '>For help, You can opt for :</p>

//             <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
//                 <NavigateButton configuration={'btn-basic w-1/2 md:w-1/5 uppercase text-base md:text-2xl py-3 font-medium'} text={'Go to Home'} path={'/'} ></NavigateButton>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   };

// export default Error;