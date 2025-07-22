import { Menu } from 'lucide-react';
import React from 'react'
type Props = {
    children?: React.ReactNode;
}
const Header = ({ children }: Props) => {
    return (
        <header className="fixed top-0 p-4 bg-theme-bg text-theme-text w-screen dark:bg-theme-dark-bg dark:text-theme-dark-text">

            {/* Header Flex Container */}
            <div className='flex md:gap-10 justify-between md:justify-between items-center'>

                <div className='w-10 h-10 dark:bg-amber-50 bg-amber-300 rounded-full'></div>

                {/* Mobile View */}
                <Menu className="md:hidden"></Menu>

                {/* Desktop View */}
                <div className='hidden md:flex gap-5 bg-theme-dark-bg dark:bg-theme--bg'>
                    <div className='w-10 h-10 dark:bg-amber-50 bg-amber-300'></div>
                    <div className='w-10 h-10 dark:bg-amber-50 bg-amber-300'></div>
                    <div className='w-10 h-10 dark:bg-amber-50 bg-amber-300'></div>
                </div>

                {/* passed in children */}
                {children!}

            </div>

        </header>
    )
}

export default Header;