'use client';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Props = {
    screenBased?: string;
    showLabel?: boolean;
    labelPosition?: 'left' | 'right';
}

const SettingThemeToggle = ({ screenBased, showLabel = false, labelPosition = 'left' }: Props) => {
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

    const isDark = theme === 'dark';

    return (
        <div className={`flex items-center gap-3 ${screenBased}`}>
            {showLabel && labelPosition === 'left' && (
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {isDark ? 'Dark' : 'Light'}
                </span>
            )}

            <button
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isDark ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                role="switch"
                aria-checked={isDark}
                aria-label="Toggle theme"
            >
                <span
                    className={`${isDark ? 'translate-x-6' : 'translate-x-1'
                        } inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-white transition-transform`}
                >
                    {isDark ? (
                        <Moon className="h-2.5 w-2.5 text-blue-600" />
                    ) : (
                        <Sun className="h-2.5 w-2.5 text-yellow-500" />
                    )}
                </span>
            </button>

            {showLabel && labelPosition === 'right' && (
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {isDark ? 'Dark' : 'Light'}
                </span>
            )}
        </div>
    );
};

export default SettingThemeToggle;