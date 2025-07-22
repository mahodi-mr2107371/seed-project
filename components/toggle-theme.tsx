'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
type Props = {
    screenBased?: string;
}
const ToggleTheme = ({ screenBased }: Props) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        setTheme(preferredTheme);
        document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} className={`${screenBased} p-1 rounded transition-all`} >
            {theme === 'dark' ? <Sun /> : <Moon />
            }
        </button >
    );
};

export default ToggleTheme;