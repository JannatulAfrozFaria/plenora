import React from 'react';

const loading = () => {
    return (
        <div className='py-16 w-5/6 mx-auto'>
            <progress className="progress progress-accent w-56" value="70" max="100"></progress>
        </div>
    );
};

export default loading;