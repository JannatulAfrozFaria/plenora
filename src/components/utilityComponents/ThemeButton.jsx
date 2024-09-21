import Link from 'next/link';
import React from 'react';

const ThemeButton = ({path, text}) => {
    return (
        <div>
            <button>
                <a  href={`${path}`}  className="btn btn-sm btn-basic text-capitalize">{text}</a>
            </button>
            {/* <Link  href={`${path}`} className='nav-text-basic px-2' href={item.path} key={item.path}> {item.title} </Link> */}
        </div>
    );
};

export default ThemeButton;