import React from 'react';

const ThemeButton = ({text}) => {
    return (
        <div>
            <button>
                <a className="btn btn-sm btn-basic text-capitalize">{text}</a>
            </button>
        </div>
    );
};

export default ThemeButton;