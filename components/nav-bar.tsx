import React from 'react'
import NavToggle from './nav-toggle';
type Props = {
    className?: String;
}
const NavBar = ({ className }: Props) => {
    return (
        <div className={`flex ${className!}`}>
            <nav className=" w-50 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4">
                <ul className='flex flex-col gap-5'>
                    <li className="mb-2"><a href="/dashboard">Dashboard</a></li>
                    <li className="mb-2"><a href="/courses">Courses</a></li>
                    <li className="mb-2"><a href="/users">Users</a></li>
                    <li className="mb-2"><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;