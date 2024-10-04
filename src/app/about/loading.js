import React from 'react';

const loading = () => {
    return (
        <div>
            <progress className="progress progress-accent w-56" value="70" max="100"></progress>
        </div>
    );
};

export default loading;