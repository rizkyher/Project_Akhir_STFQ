import React, { useEffect, useState } from 'react';

export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    function getCookie(cookieName) {
        const name = `${cookieName}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }

    return (
        <div>
            <header className={'header bg-[#29ADB2] fixed top-0 left-0 right-0 text-white'}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <a href="/">FIQIH KELUARGA</a>
                    </div>
                    <div>
                        {!isLoggedIn && (
                            <>
                                <a href="Login" className="bg-[#0766AD] text-white px-6 py-2 rounded-lg hover:bg-blue-700 mr-6">Login</a>
                                <a href="Register" className="bg-[#0766AD] text-white px-4 py-2 rounded-lg hover:bg-blue-700">Register</a>
                            </>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};
