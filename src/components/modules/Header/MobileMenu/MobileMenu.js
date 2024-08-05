import React from 'react'
import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem/MobileMenuItem';
import MobileSubMenuItem from './MobileSubMenuItem/MobileSubMenuItem';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';

export default function MobileMenu({ isNavMobileOpen, setIsNavMobileOpen }) {

    return (
        <>
            <div className={`${isNavMobileOpen ? 'mobile-nav--active' : ''} fixed top-0 left-0 w-screen h-screen z-50 translate-x-[-100%] mobile-nav-transition invisible`}>
                {/* Black bg */}
                <div onClick={() => setIsNavMobileOpen(prevState => !prevState)} className=' absolute inset-0 bg-mainBlack opacity-[0.3]'></div>
                <div className="mobile-nav--active relative h-full w-[270px] sm:w-[350px] text-mainBlack bg-white z-10 overflow-y-auto py-8 px-4 translate-x-[-100%] invisible opacity-0">
                    {/* Exit Btn */}
                    <span onClick={() => setIsNavMobileOpen(prevState => !prevState)} className=' absolute right-3 text-mainBlack top-4 font-InterSB text-2xl cursor-pointer'>X</span>
                    {/* Logo */}
                    <div className=" mb-8">
                        <Link href={'/'} className=' flex items-center justify-start text-main text-4xl'>
                            <PiShoppingCartSimpleFill className='text-5xl' />
                            <h3 className=' pl-1 '>Elctro</h3>
                        </Link>
                    </div>
                    {/* Menu */}
                    <ul>
                        <li className=" border-b border-mainGray">
                            <Link href={'/'} className=' flex justify-between leading-8 transition-all duration-500 hover:text-main items-center text-mainBlack capitalize font-InterSB tracking-[0.48px] h-12'>
                                Home
                            </Link>
                        </li>
                        <MobileMenuItem title="course">
                            <MobileSubMenuItem title="course list" href="course-list" />
                            <MobileSubMenuItem title="course detail" href="course-detail/ai-course" />
                        </MobileMenuItem>
                        <MobileMenuItem title="blog">
                            <MobileSubMenuItem title="blog list" href="blog-list" />
                            <MobileSubMenuItem title="blog detail" href="blog-detail" />
                        </MobileMenuItem>
                        <MobileMenuItem title="pages">
                            <MobileSubMenuItem title="teacher list" href="teacher-list" />
                            <MobileSubMenuItem title="teacher detail" href="teacher-detail" />
                            <MobileSubMenuItem title="login" href="login" />
                            <MobileSubMenuItem title="register" href="register" />
                        </MobileMenuItem>
                        <li className=" border-none">
                            <Link href={'/contact'} className=' flex justify-between leading-8 transition-all duration-500 hover:text-main items-center text-mainBlack capitalize font-InterSB tracking-[0.48px] h-12'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className=" flex-center gap-3 mb-3 mt-6 text-white">
                        <div className="btn w-[50%]">
                            <Link href="shopCart.html"> Login</Link>
                        </div>
                        <div className="btn w-[50%]">
                            <Link href="checkout.html">
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="btn w-full text-white">
                        <Link href="shopCart.html">Favourites</Link>
                    </div>


                </div>
            </div>

        </>
    )
}
