import React from 'react';
import Login from "./Login";
import { NavLink } from 'react-router-dom';
import LoginButton from "./LoginButton"

const Navbar = () => {
    return (
        <>
            <div className="container-fluid col-11 mx-auto">
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />

                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-Linecap="round" stroke-Linejoin="round" stroke-Width={2} className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-3xl">Shopify</span>
                        </a>
                        <nav className="ml-auto">
                            <LoginButton />
                            <a className="mr-5 hover:text-gray-900">
                                <svg className="h-20 w-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 38 19" stroke="currentColor">
                                    <path stroke-Linecap="round" stroke-Linejoin="round" stroke-Width={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </header>


            </div>
        </>
    )
}

export default Navbar;