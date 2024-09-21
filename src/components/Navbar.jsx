import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const NavOptions = <>
        <li><Link href="/" >Home</Link> </li>
        <li><Link href="/about">About</Link> </li>
        <li><Link href="/projects" >Projects</Link> </li>
        <li><Link href="/career">Career</Link> </li>
        <li><Link href="/contacts" >Contacts</Link> </li>
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
            <div className="navbar container mx-auto py-8 px-6 md:px-20">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-basic">
                            {NavOptions}
                        </ul>
                    </div>
                    <Link href='/'>
                        <Image height={60} width={60} src='https://i.postimg.cc/sXnSDtVf/plenora-png.png' alt='plenora-logo'  ></Image>
                    </Link>
                    <a className="btn btn-ghost text-xl md:text-3xl">Plenora</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex text-basic">
                        <ul className="menu menu-horizontal px-1">
                            {NavOptions}
                        </ul>
                    </div>
                    <a className="btn btn-sm btn-basic">Join</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;