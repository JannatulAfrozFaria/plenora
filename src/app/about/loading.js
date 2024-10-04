import React from 'react';

const loading = () => {
    return (
        <div className='w-1/2 mx-auto py-48 text-center'>
            <progress className="modify progress progress-error w-56" value="70" max="100"></progress>
        </div>
    );
};

export default loading;