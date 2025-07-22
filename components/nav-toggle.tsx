import { ChevronsLeftRight } from 'lucide-react';
import React from 'react'

const NavToggle = () => {
    return (
        <div className="hidden md:inline">
            <button className="p-1 dark:bg-gray-300 dark:text-gray-800 rounded">
                <ChevronsLeftRight></ChevronsLeftRight>
            </button>
        </div>
    )
}

export default NavToggle;