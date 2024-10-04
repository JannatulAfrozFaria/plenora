import React from 'react';

const loading = () => {
    return (
        <div className='w-1/2 mx-auto py-48 text-center'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    );
};

export default loading;