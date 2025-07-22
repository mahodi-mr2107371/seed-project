import React from 'react'
import NavToggle from './nav-toggle';

const NavBar = () => {
    return (
        <div className='flex'>
            <nav className="h-full w-50 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 p-4">
            </nav>
            <NavToggle></NavToggle>
        </div>
    )
}

export default NavBar;