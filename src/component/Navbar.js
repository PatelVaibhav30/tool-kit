import React, { useState } from 'react'
import * as FaIcon from "react-icons/fa";
import { Link } from 'react-router-dom'

function Navbar() {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'Home',
            path: '/'
        },
        {
            id: 2,
            link: 'Product',
            path: 'product'
        },
        {
            id: 3,
            link: 'Service',
            path: 'services'
        },
        {
            id: 4,
            link: 'Contact',
            path: 'contact-us'
        }
    ]
    return (
            <div className='bg-yellow-400 items-center w-full h-20 p-4 flex justify-between absolute top-0'>
                <div className=''>
                    <h3 className='text-4xl font-bold'>Tool Kit</h3>
                </div>

                
                    <ul className='hidden md:flex'>
                        {links.map(({ id, link, path }) => (
                            <li key={id} className='px-4 cursor-pointer capitalize text-2xl text-gray-100 hover:scale-105 duration-200'>
                                <Link to={path}>{link}</Link>
                            </li>
                        ))}
                    </ul>

                    <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 text-gray-100 hover:scale-105 duration-200 md:hidden'>
                        {nav ? <FaIcon.FaTimes size={30} /> : <FaIcon.FaBars size={30} />}
                    </div>

                    {nav && (
                        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-yellow-200 to-white text-gray-600 text-2xl'>
                            {links.map(({ id, link, path }) => (
                                <li key={id}
                                    className='px-4 cursor-pointer capitalize py-6 text-4xl' onClick={()=> setNav(false)}>
                                    <Link to={path}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    
            </div>
    )
}

export default Navbar