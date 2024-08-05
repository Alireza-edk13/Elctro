"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Menu from '../Menu/Menu';
import MobileMenu from '../MobileMenu/MobileMenu';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
export default function Nav() {

    const [isFix, setIsFix] = useState(false);
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false)
    const [isNavMobileOpen, setIsNavMobileOpen] = useState(false)
    const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)

    function fixNav() {
        if (document.documentElement.scrollTop > 700) {
            setIsFix(true);
        } else if (document.documentElement.scrollTop === 0) {
            setIsFix(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', fixNav);
        return () => {
            window.removeEventListener('scroll', fixNav);
        };
    },);


    return (
        <>
            <nav className={`${isFix ? 'fix-nav-active shadow-custom' : ' block'} z-40 py-4 bg-main  top-0 left-0 w-full text-white`}>
                <div className=' container flex justify-between items-center'>
                    <div className=' flex-center gap-20'>
                        <div>
                            <Link href={'/'} className=' flex-center text-2xl md:text-3xl'>
                                <PiShoppingCartSimpleFill className=' text-3xl md:text-4xl' />
                                <h3 className=' pl-1 '>Elctro</h3>
                            </Link>
                        </div>
                        <Menu />
                    </div>
                    <div className='flex-center gap-4 sm:gap-5 md:gap-8'>
                        <div className='cursor-pointer flex-center ' onClick={() => setIsSearchBoxOpen(prevState => !prevState)}>
                            <IoIosSearch className={`${isSearchBoxOpen ? 'rotate-180' : ''} text-2xl sm:text-3xl transition-all duration-[.5s]`} />
                        </div>
                        <div className='cursor-pointer hidden lg:flex-center '>
                            <IoMdHeartEmpty className={` text-2xl sm:text-3xl transition-all duration-[.5s]`} />
                        </div>
                        <div className='cursor-pointer flex-center ' onClick={() => setIsShoppingCartOpen(prevState => !prevState)}>
                            <IoCartOutline className={` text-2xl sm:text-3xl transition-all duration-[.5s]`} />
                        </div>
                        <div className='cursor-pointer hidden lg:flex-center '>
                            <AiOutlineUser className={` text-2xl sm:text-3xl transition-all duration-[.5s]`} />
                        </div>
                        <div className='block lg:hidden cursor-pointer' onClick={() => setIsNavMobileOpen(prevState => !prevState)}>
                            < AiOutlineMenu className=' text-2xl sm:text-3xl' />
                        </div>

                    </div>
                    {/* search Box */}
                    <div onClick={() => setIsSearchBoxOpen(prevState => !prevState)} className={`${isSearchBoxOpen ? "fixed inset-0 bg-mainBlack opacity-[0]  z-20 w-screen h-screen" : "absolute"}`}></div>
                    <form className={` ${isSearchBoxOpen ? ' visible opacity-100 scale-y-100' : ' invisible opacity-0 scale-y-0'}  max-w-sm mainBoxShadow transition-all duration-[0.5s] ease-in-out mx-auto absolute left-0 right-0 w-full sm:p-auto p-4 top-14 sm:left-auto sm:-bottom-20 sm:right-9 z-20 h-4`}>
                        <label className="mb-2 text-sm  text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <IoIosSearch fontSize={'1.4rem'} className=' text-main' />
                            </div>
                            <input type="search" className="block text-mainBlack w-full p-4 ps-10 shadow-custom rounded-lg bg-white focus:ring-blue-500 outline-none" placeholder="Search..." required />
                            <button type="button" className=' bg-main absolute rounded-md end-2.5 bottom-2 top-2 -ml-24 py-2 px-4 text-md'><span className='btn_curve'></span>Search</button>
                        </div>
                    </form>

                </div>
            </nav>
            <MobileMenu isNavMobileOpen={isNavMobileOpen} setIsNavMobileOpen={setIsNavMobileOpen} />
            <ShoppingCart isShoppingCartOpen={isShoppingCartOpen} setIsShoppingCartOpen={setIsShoppingCartOpen} />
        </>
    )
}
