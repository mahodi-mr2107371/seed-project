'use client';
import React, { useEffect, useRef, useState } from 'react';
import NavBar from './nav-bar';
import NavToggle from './nav-toggle';

type Props = {
    classNameNavBar?: string;
    classNameNavToggle?: string;
    className?: string;
};

const NavComponent = ({ classNameNavBar, classNameNavToggle, className }: Props) => {
    const [navShow, setNavShow] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const handleNavToggle = () => {
        setNavShow(!navShow);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                setNavShow(false);
            }
        };

        if (navShow) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navShow]);

    return (
        <div ref={navRef} className={`absolute flex ${className ?? ''}`}>
            <NavBar className={`flex ${navShow ? '' : 'hidden'} ${classNameNavBar ?? ''}`} />
            <NavToggle
                className={`mt-80 ${classNameNavToggle ?? ''}`}
                onclick={handleNavToggle}
            />
        </div>
    );
};

export default NavComponent;
