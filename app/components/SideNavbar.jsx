
"use client"
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';




export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    const handleNavClick = () => setIsOpen(false);

    return (
        <div>
            {/* Toggle Button */}
            <button onClick={toggleNavbar} className="z-50 fixed top-0 left-0 m-2 p-2 text-white bg-blue-500">
            {isOpen ? 'Close' : 'Menu'}
            </button>

            {/* Navbar Panel */}
            <div className={`fixed top-0 left-0 w-full h-full bg-[#121212] z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-center justify-center h-full">
                    {/* Links */}
                    <Link href="/" onClick={handleNavClick} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Main Menu</Link>
                    <Link href="/AtomicInteger" onClick={handleNavClick} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Atomic Integer</Link>  
                    <Link href="/" onClick={handleNavClick} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Countdown Latch</Link>
                </div>
            </div>
        </div>
    );
}
