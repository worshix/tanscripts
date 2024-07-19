'use client';

import Link from "next/link";
import { useState } from 'react';

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
    <>
        <header className="w-full h-fit m-0 p-0">
            <nav className="main-nav flex h-fit shadow-md bg-black text-white font-bold w-full z-49">
                <Link className="tan w-fit h-full p-2 block m-2 mr-auto sm:text-xl" href='/contacts'>Tanscripts Engineering</Link>
                <Link className="nav-item translate-x-96 opacity-0 w-[130px] hover:border-main-100 hover:text-main-100 hover:scale-110 text-center m-2 h-full border-2 rounded-full border-white p-2 hidden md:block bi bi-house" href='/'>Home</Link>
                <Link className="nav-item translate-x-96 opacity-0 w-[130px] hover:border-main-100 hover:text-main-100 hover:scale-110 text-center m-2 h-full border-2 rounded-full border-white p-2 hidden md:block bi bi-braces" href="/engineering">Engineering</Link>
                <Link className="nav-item translate-x-96 opacity-0 w-[130px] hover:border-main-100 hover:text-main-100 hover:scale-110 text-center m-2 h-full border-2 rounded-full border-white p-2 hidden md:block bi bi-code-slash" href="/training">Training</Link>
                <Link className="nav-item translate-x-96 opacity-0 w-[130px] hover:border-main-100 hover:text-main-100 hover:scale-110 text-center m-2 h-full border-2 rounded-md border-white p-2 hidden md:block bi bi-phone" href='/contacts'>Contacts</Link>
                <Link className="nav-item translate-x-96 opacity-0 w-fit h-full block p-2 m-2 md:hidden bi bi-house-fill" href='/'></Link>
                <button className="nav-item translate-x-96 opacity-0 w-fit h-full block p-2 m-2 md:hidden bi bi-menu-button-wide-fill" onClick={openMenu}></button>
            </nav>
            {menuOpen && (
            <nav className="sidebar z-50 fixed h-screen bg-main-500 bg-opacity-40 backdrop-blur-sm w-[40%] right-0 rounded-s-2xl top-0 translate-x-96 opacity-0 shadow-md">
                <h1 className="text-white text-center p-2 font-bold">Tanscripts Engineering</h1>
                <div className="w-full flex py-4 flex-col font-bold text-center divide-y-4 divide-white divide-opacity-10">
                    <button className="h-full w-full pl-4 active:bg-main-400 hover:bg-white hover:bg-opacity-15 transition-all duration-300 text-start py-3 text-white text-xl" onClick={openMenu}><span className="bi bi-chevron-right block p-2 text-center"></span></button>
                    <Link onClick={ openMenu } className="active:bg-main-400 text-white w-full hover:bg-white hover:bg-opacity-15 transition-all duration-300 side-nav-item p-2 py-4 bi bi-house-fill" href='/'>Home</Link>
                    <Link onClick={ openMenu } className="active:bg-main-400 text-white w-full hover:bg-white hover:bg-opacity-15 transition-all duration-300 side-nav-item p-2 py-4 bi bi-braces" href="/engineering">Engineering</Link>
                    <Link onClick={ openMenu } className="active:bg-main-400 text-white w-full hover:bg-white hover:bg-opacity-15 transition-all duration-300 side-nav-item p-2 py-4 bi bi-code-slash" href="/training">Training</Link>
                    <Link onClick={ openMenu } className="active:bg-main-400 text-white w-full hover:bg-white hover:bg-opacity-15 transition-all duration-300 side-nav-item p-2 py-4 bi bi-phone-fill" href='/contacts'>Contacts</Link>
                </div>
            </nav> )}
        </header>
    </>
)
}

export default Navbar