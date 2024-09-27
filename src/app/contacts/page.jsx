import NewsLetter from '@/components/HomePage/NewsLetter';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-5  gap-24'>
                <div className='col-span-4 text-[40px] md:text-[90px] '>
                    <h1 className='text-gray-300 '>Start the  <br />
                        Conversation</h1>
                    <h1 className='text-theme font-bold text-[40px] md:text-[100px]'>T: 604.737.0235
                        build@plenora.ca</h1>
                </div>
                <div className='col-span-4 md:col-span-1 text-justify text-gray grid grid-cols-1 gap-6 items-center'>
                    <div>
                        <h1 className="text-theme font-bold">Plenora Architects Ltd.</h1>
                        <p> #410-1639 West 2nd Avenue <br />
                            Vancouver, BC <br />
                            Canada V6J 1H3</p>
                        <a href="https://www.google.ca/maps/place/1639+W+2nd+Ave,+Vancouver,+BC+V6J+1H3/@49.2699915,-123.1440888,17z/data=!3m1!4b1!4m5!3m4!1s0x548673c96f4a8f7b:0x89c8b0ca78f7ea82!8m2!3d49.269988!4d-123.1419001">Get Directions</a>
                    </div>
                    <div>
                        <h1 className="text-theme font-bold">Follow us</h1>
                        <a className='hover:text-theme hover:underline' href="https://www.instagram.com/">Instagram</a>
                    </div>
                    <div>
                        <h1 className="text-theme font-bold">Press inquiries</h1>
                        <p> #410-1639 West 2nd Avenue <span> <a className=' text-gray hover:text-theme hover:underline' href="mailto:build@measured.ca">build@measured.ca</a></span></p>
                    </div>
                    <div>
                        <h1 className="text-theme font-bold">Careers</h1>
                        <p>Plenora Architects is always on the lookout for dedicated and enthusiastic architects and intern architects to join our team. Please send your CV, Project Links, and necessary details including portfolio to <span> <a className='hover:text-theme hover:underline' href="mailto:jobs@measured.ca">jobs@measured.ca</a></span></p>
                    </div>
                </div>
            </div>
            <div className='mt-12 md:mt-24'>
                <NewsLetter></NewsLetter>
            </div>
        </div>

    );
};

export default page;