import React, { useState, useEffect } from 'react'

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 500; // Atur ambang batas untuk mengubah warna saat di-scroll
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <div>
            <header className={scrolled ? 'header bg-[#29ADB2] fixed top-0 left-0 right-0 text-white' : 'header text-white bg-transparent fixed top-0 left-0 right-0'}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">FIQIH KELUARGA</div>
                    <div>
                        <a href="Login" className="bg-[#0766AD] text-white px-6 py-2 rounded-xl hover:bg-blue-700 mr-6">Login</a>
                        <a href="Register" className="bg-[#0766AD] text-white px-4 py-2 rounded-xl hover:bg-blue-700">Register</a>
                    </div>
                </div>
            </header>
        </div>
    )
}
