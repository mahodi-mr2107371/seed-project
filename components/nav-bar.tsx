import React from 'react'
import NavToggle from './nav-toggle';
type Props = {
    className?: string;
}
const NavBar = ({ className }: Props) => {
    return (
        <div className={`flex ${className!}`}>
            <nav className=" w-50 pt-10 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 opacity-95 shadow-lg rounded-lg">
                <ul className='flex flex-col'>
                    <a href="/dashboard"><li>Dashboard</li></a>
                    <a href="/courses"><li>Courses</li></a>
                    <a href="/users"><li>Users</li></a>
                    <a href="/settings"><li>Settings</li></a>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;