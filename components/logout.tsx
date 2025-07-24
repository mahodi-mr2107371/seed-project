import { LogOut } from 'lucide-react';
import React from 'react'

const Logout = () => {
    return (
        <button className="rounded shadow-md">
            <LogOut className="m-2 w-5 h-5  text-foreground md:hidden" />
            <div className='p-2 hidden md:inline md:bg-red-500 md:text-white rounded md:hover:bg-red-600'>Logout</div>

        </button>
    )
}
export default Logout;