import React from 'react';

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-5'>
            <div className='col-span-4 text-[130px] md:text-[200px]'>
                <h1 className='text-gray-300 '>Start the Conversation</h1>
                <h1 className='text-theme'>T: 604.737.0235
                    build@plenora.ca</h1>
            </div>
            <div className='col-span-1 text-gray grid grid-cols-1 gap-6 items-center'>
                <div>
                    <h1 className="text-theme font-bold">Plenora Architects Ltd.</h1>
                    <p> #410-1639 West 2nd Avenue <br />
                        Vancouver, BC <br />
                        Canada V6J 1H3</p>
                </div>
                <div>
                    <h1 className="text-theme font-bold">Follow us</h1>
                    <a className='hover:text-theme hover:underline' href="https://www.instagram.com/">Instagram</a>
                </div>
                <div>
                    <h1 className="text-theme font-bold">Press inquiries</h1>
                    <p> #410-1639 West 2nd Avenue <span> <a className='hover:text-theme hover:underline' href="mailto:build@measured.ca">build@measured.ca</a></span></p>
                </div>
                <div>
                    <h1 className="text-theme font-bold">Careers</h1>
                    <p>Plenora Architects is always on the lookout for dedicated and enthusiastic architects and intern architects to join our team. Please send your CV and portfolio to <span> <a className='hover:text-theme hover:underline' href="mailto:jobs@measured.ca">jobs@measured.ca</a></span></p>
                </div>
            </div>
        </div>
    );
};

export default page;