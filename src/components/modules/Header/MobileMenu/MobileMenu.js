import React from 'react'
import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem/MobileMenuItem';
import MobileSubMenuItem from './MobileSubMenuItem/MobileSubMenuItem';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';

export default function MobileMenu({ isNavMobileOpen, setIsNavMobileOpen }) {

    return (
        <>
            <div className={`${isNavMobileOpen ? 'mobile-nav--active' : ''} fixed top-0 left-0 w-screen h-screen z-50 translate-x-[100%] mobile-nav-transition invisible lg:hidden`}>
                {/* Black bg */}
                <div onClick={() => setIsNavMobileOpen(prevState => !prevState)} className=' absolute inset-0 bg-mainBlack opacity-[0.3]'></div>
                <div className="mobile-nav--active relative h-full w-[270px] sm:w-[350px] text-mainBlack bg-white z-10 overflow-y-auto py-8 px-4 translate-x-[100%] invisible opacity-0">
                    {/* Exit Btn */}
                    <span onClick={() => setIsNavMobileOpen(prevState => !prevState)} className=' absolute left-3 text-mainBlack top-4 font-InterSB text-2xl cursor-pointer'>X</span>
                    {/* Logo */}
                    <div className=" mb-8">
                        <Link href={'/'} className=' flex justify-start items-center text-main text-3xl md:text-4xl'>
                            <PiShoppingCartSimpleFill className=' text-4xl md:text-5xl' />
                            <h3 className=' font-morabba pl-1 '>الکتروشاپ</h3>
                        </Link>
                    </div>
                    {/* Menu */}
                    <ul>
                        <li className=" border-b border-mainGray">
                            <Link href={'/'} className=' flex justify-between leading-8 transition-all duration-500 hover:text-main items-center text-mainBlack capitalize font-InterSB tracking-[0.48px] h-12'>
                                صفحه اصلی
                            </Link>
                        </li>
                        <MobileMenuItem title="مصولات">
                            <MobileSubMenuItem title="لیست محصولات" href="/product-list" />
                            <MobileSubMenuItem title="جزییات محصولات" href="product-details/headphone/headphone-asus" />
                        </MobileMenuItem>
                        <MobileMenuItem title="مقاله">
                            <MobileSubMenuItem title="لیست مقالات" href="blog-list" />
                            <MobileSubMenuItem title="جزییات مقالات" href="blog-details" />
                        </MobileMenuItem>
                        <MobileMenuItem title="صفحات">
                            <MobileSubMenuItem title="سبد خرید" href="/cart" />
                            <MobileSubMenuItem title="تسویه حساب" href="/checkout" />
                            <MobileSubMenuItem title="ورود" href="login" />
                            <MobileSubMenuItem title="ثبت نام" href="register" />
                        </MobileMenuItem>
                        <li className=" border-none">
                            <Link href={'/contact'} className=' flex justify-between leading-8 transition-all duration-500 hover:text-main items-center text-mainBlack capitalize font-InterSB tracking-[0.48px] h-12'>
                                ارتباط با ما
                            </Link>
                        </li>
                    </ul>
                    <div className=" flex-center gap-3 mb-3 mt-6 text-white">
                        <div className="btn w-[50%]">
                            <Link href="shopCart.html"> ورود</Link>
                        </div>
                        <div className="btn w-[50%]">
                            <Link href="checkout.html">
                                ثبت نام
                            </Link>
                        </div>
                    </div>
                    <div className="btn w-full text-white">
                        <Link href="shopCart.html">علاقه مندی</Link>
                    </div>


                </div>
            </div>

        </>
    )
}
