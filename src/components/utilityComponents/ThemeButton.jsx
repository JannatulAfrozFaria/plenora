import Link from 'next/link';
import React from 'react';

const ThemeButton = ({path, text,size,width,padding}) => {
    return (
        <div className={`${width}`}>
            <button>
                <a  href={`${path}`}  className={`btn ${size} btn-basic capitalize ${padding} `}>{text}</a>
            </button>
            {/* <Link  href={`${path}`} className='nav-text-basic px-2' href={item.path} key={item.path}> {item.title} </Link> */}
        </div>
    );
};

export default ThemeButton;