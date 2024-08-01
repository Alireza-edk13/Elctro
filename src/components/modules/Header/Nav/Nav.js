"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
export default function Nav() {

    const [isFix, setIsFix] = useState(false);
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false)
    const [isNavMobileOpen, setIsNavMobileOpen] = useState(false)

    function fixNav() {
        if (document.documentElement.scrollTop > 500) {
            setIsFix(true);
        } else if (document.documentElement.scrollTop < 100) {
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
            <nav className={`${isFix ? 'fix-nav-active shadow-custom' : ''} z-40 py-4 bg-main absolute top-0 left-0 w-full text-white`}>
                <div className=' container flex justify-between items-center'>
                    <div>
                        <Link href={'/'} className=' flex-center text-2xl md:text-3xl'>
                            <PiShoppingCartSimpleFill className=' text-3xl md:text-4xl' />
                            <h3 className=' pl-1 font-medium'>Edk-Shop</h3>
                        </Link>
                    </div>
                    <div className='hidden xl:flex-center  gap-16'>
                        <ul className='flex-center child:cursor-pointer gap-10'>
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li className='relative group'>
                                <div>Course</div>
                                <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-24px] top-[50%] pt-7 transition-all ease duration-300  z-20 ${isFix ? ' top-full' : ''}`}>
                                    <div className='flex flex-col text-left  child:rounded-md capitalize child:transition-all text-mainBlack font-medium shadow-custom child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-xl bg-white'>
                                        <Link href={'/course-list'} className='dropdown'>Courses List</Link>
                                        <Link href={'/course-detail/ai-course'} className='dropdown'>Course Details</Link>
                                    </div>

                                </div>
                            </li>
                            <li className='relative group'>
                                <div>BLog</div>
                                <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-24px] top-[50%] pt-7 transition-all ease duration-300  z-20 ${isFix ? ' top-full' : ''}`}>
                                    <div className='flex flex-col text-left  child:rounded-md capitalize child:transition-all text-mainBlack font-medium child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-xl bg-white shadow-custom'>
                                        <Link href={'/blog-list'} className='dropdown'>Blog List</Link>
                                        <Link href={'/blog-detail'} className='dropdown'>Blog Details</Link>
                                    </div>

                                </div>
                            </li>
                            <li className='relative group'>
                                <div>Pages</div>
                                <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-24px] top-[50%] pt-7 transition-all ease duration-300  z-20 ${isFix ? ' top-full' : ''}`}>
                                    <div className='flex flex-col text-left  child:rounded-md capitalize child:transition-all child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-xl bg-white text-mainBlack font-medium shadow-custom '>
                                        <Link href={'/teacher-list'} className='dropdown'>Teachers List</Link>
                                        <Link href={'/teacher-detail'} className='dropdown'>Teacher Details</Link>
                                        <Link href={'/login'} className='dropdown'>Login</Link>
                                        <Link href={'/register'} className='dropdown'>Register</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-center gap-4 sm:gap-5 md:gap-8'>
                        <div className='cursor-pointer flex-center ' onClick={() => setIsSearchBoxOpen(prevState => !prevState)}>
                            <IoIosSearch className={`${isSearchBoxOpen ? 'rotate-180' : ''} text-2xl vsm:text-3xl transition-all duration-[.5s]`} />
                        </div>
                        <div className='cursor-pointer hidden vvsm:flex-center '>
                            <IoMdHeartEmpty className={` text-2xl vsm:text-3xl transition-all duration-[.5s]`} />
                        </div>
                        <div className='cursor-pointer flex-center '>
                            <IoCartOutline className={` text-2xl vsm:text-3xl transition-all duration-[.5s]`} />
                        </div>
                        <div className='cursor-pointer hidden vvsm:flex-center '>
                            <AiOutlineUser className={` text-2xl vsm:text-3xl transition-all duration-[.5s]`} />
                        </div>
                        <div className='block vvsm:hidden cursor-pointer'>
                            < AiOutlineMenu className=' text-2xl vsm:text-3xl' />
                        </div>

                    </div>
                    {/* search Box */}
                    <div onClick={() => setIsSearchBoxOpen(prevState => !prevState)} className={`${isSearchBoxOpen ? "fixed inset-0 bg-mainBlack opacity-[0] w-screen h-screen" : "absolute"}`}></div>
                    <form className={` ${isSearchBoxOpen ? ' visible opacity-100 scale-y-100' : ' invisible opacity-0 scale-y-0'}  max-w-sm mainBoxShadow transition-all duration-[0.5s] ease-in-out mx-auto absolute w-full vsm:p-auto p-4 top-16 vsm:-bottom-20 vsm:right-5`}>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
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
        </>
    )
}
