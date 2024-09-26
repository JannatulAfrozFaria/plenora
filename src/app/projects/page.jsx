import React from 'react';
import { ProjectsInfo } from '@/lib/projectsInfo';

const page = () => {
    return (
        <div>
            <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className='text-gray-400 text-[130px] md:text-[260px]'>Work</h1>
                </div>
                <div className='text-gray'>
                    <h1 className='text-bold text-gray'>Filter by scope</h1>
                    
                </div>
                <div className='w-5/6 mx-auto grid grid-cols-4 gap-6'>
                        {ProjectsInfo.map(project=>
                            <div>
                                <h1>Name: {project.name} </h1>
                                <h1>Category: {project.category} </h1>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default page;