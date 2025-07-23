import React from 'react'

const Footer = () => {
    return (
        <footer className=" mt-2 w-full text-xs text-center bg-theme-bg dark:bg-theme-dark-bg text-theme-text dark:text-theme-dark-text border-t border-gray-200 dark:border-gray-700 py-3">
            <p className="mb-1">
                Developed by <span className="font-semibold">Mahodi Hasan</span> ·{" "}
                <a
                    href="https://mahodi.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-500 transition"
                >
                    Portfolio
                </a>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} All rights reserved.
            </p>
        </footer>

    )
}

export default Footer;