import { Menu } from 'lucide-react';
import React from 'react'
import Logout from './logout';
type Props = {
    children?: React.ReactNode;
    className?: string;
}
const Header = ({ children, className }: Props) => {
    return (
        <header className={`inline-block top-0 p-4 py-2 bg-theme-bg text-theme-text w-full dark:bg-theme-dark-bg dark:text-theme-dark-text ${className!}`}>

            {/* Header Flex Container */}
            <div className='flex md:gap-10 justify-between items-center'>

                <div className='flex items-center gap-2 text-theme-text dark:text-theme-dark-text'>
                    <img src="/images/download.png" alt="Logo" className='w-10 h-10 rounded-full' />
                    <b>Mahodi Hasan</b>
                </div>

                {/* Desktop View */}
                <div className='flex gap-5 bg-theme-dark-bg dark:bg-theme--bg'>
                    <h1><b>E-learning</b></h1>
                </div>

                {/* theme toggle and Logout button */}
                <div className='flex items-center gap-2'>
                    {children!}
                    <Logout></Logout>
                </div>

            </div>

        </header>
    )
}

export default Header;