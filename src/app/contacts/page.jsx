import React from 'react';

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div className='col-span-4 text-[130px] md:text-[200px]'>
                <h1 className='text-gray-300 '>Start the Conversation</h1>
                <h1 className='text-theme'>T: 604.737.0235
                    build@plenora.ca</h1>
            </div>
            <div className='col-span-1 text-gray'>
                <div>
                    <h1 className="text-theme">Plenora Architects Ltd.</h1>
                    <p> #410-1639 West 2nd Avenue <br />
                        Vancouver, BC <br />
                        Canada V6J 1H3</p>
                </div>
            </div>
        </div>
    );
};

export default page;