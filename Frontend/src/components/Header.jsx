import React from 'react'

export const Header = () => {

    return (
        <div>
            <header className={'header bg-[#29ADB2] fixed top-0 left-0 right-0 text-white'}>
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold"><a href="/">FIQIH KELUARGA</a></div>
                    <div>
                        <a href="Login" className="bg-[#0766AD] text-white px-6 py-2 rounded-lg hover:bg-blue-700 mr-6">Login</a>
                        <a href="Register" className="bg-[#0766AD] text-white px-4 py-2 rounded-lg hover:bg-blue-700">Register</a>
                    </div>
                </div>
            </header>
        </div>
    )
}
