import { ChevronsLeftRight, Menu } from 'lucide-react';
import React from 'react'
type Props = {
    className?: string;
    onclick?: () => void;
}
const NavToggle = ({ className, onclick }: Props) => {
    return (
        <div className={`md:inline ${className!}`}>
            <button onClick={onclick} className="p-1 dark:bg-gray-300 dark:text-gray-800 rounded">
                <ChevronsLeftRight className='w-4 h-4'></ChevronsLeftRight>
            </button>
        </div>
    )
}

export default NavToggle;