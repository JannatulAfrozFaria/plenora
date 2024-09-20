import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const NavOptions = <>
     |  | What we do | Career |

        <li><Link to="/"><a href="">Home</a></Link> </li>
        {/* <li><Link to="/addMedicine"><a href="">Add a Medicine</a></Link> </li> */}
        <li><Link to="/about"><a href="">About</a></Link> </li>
        <li><Link to="/projects"><a href="">Projects </a></Link> </li>
        <li><Link to="/career"><a href="">Career</a></Link> </li>
        <li><Link to="/contacts"><a href="">Contacts </a></Link> </li>
        <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        
    </>
    return (
        <div className='bg-base-100 text-primary'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {NavOptions}
                        </ul>
                    </div>
                    <Link href={'/'}>
                            <Image height={60} width={100} src='https://i.postimg.cc/sXnSDtVf/plenora-png.png' alt='plenora-logo' ></Image>
                    </Link>
                    <a className="btn btn-ghost text-xl">Plenora</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;