import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
export default function ShoppingCart({ isShoppingCartOpen, setIsShoppingCartOpen }) {

    return (
        <>
            <div className={`${isShoppingCartOpen ? 'mobile-nav--active' : ''} fixed top-0 left-0 w-screen h-screen z-50 translate-x-[100%] mobile-nav-transition  invisible`}>
                {/* Black bg */}
                <div onClick={() => setIsShoppingCartOpen(prevState => !prevState)} className=' absolute inset-0 bg-mainBlack opacity-[0.3]'></div>
                <div className="mobile-nav--active relative h-full w-[270px] sm:w-[350px] text-mainBlack bg-white z-10 overflow-y-auto  translate-x-[100%] invisible opacity-0">
                    <div className=" flex justify-between items-center bg-mainBg px-5 py-2">
                        <h6 className=' uppercase font-dana '>سبد خرید(<span>1</span>)</h6>
                        <span className=' text-2xl  cursor-pointer' onClick={() => setIsShoppingCartOpen(prevState => !prevState)}>X</span>
                    </div>
                    <div className=" h-[52vh] overflow-y-auto border-[2px] border-mainBorder">
                        <div className=" flex justify-evenly items-center py-4 border-b-2 border-mainBorder">
                            <div className=" w-[70px] border-[2px] border-mainBorder rounded-lg">
                                <Link href="/">
                                    <Image src="/images/product/product-5.webp" alt="productImg" className=' rounded-lg' width={70} height={70} />
                                </Link>
                            </div>
                            <div>
                                <Link href="/" className=' text-sm sm:text-base '>
                                    Leather Watch Band
                                </Link>
                                <div className=" flex items-center mt-2">
                                    <div className=" flex-center gap-1 sm:gap-2.5">
                                        <div className=' ml-1 sm:ml-3 text-main flex-center gap-1  text-md sm:text-lg'>
                                            <span>123</span>
                                            <span>تومان</span>
                                        </div>

                                        <span className="  w-6 h-7 text-center  inline-block rounded-2xl bg-mainBg pt-1">-</span>
                                        <span className="">5</span>
                                        <span className=" w-6 h-7 text-center flex-center  inline-block rounded-2xl bg-mainBg pt-1">+</span>
                                    </div>
                                </div>
                            </div>
                            <FaRegTrashAlt />
                        </div>
                    </div>
                    <div>
                        <div className=" text-sm sm:text-base p-4 border-b-[2px] border-mainBorder space-y-3">
                            <div className='  flex justify-between items-center '>
                                <div className='flex-center gap-1'>
                                    <span>12</span>
                                    <span>محصول</span>
                                </div>
                                <div className=' text-main flex-center gap-1'>
                                    <span>123</span>
                                    <span>تومان</span>
                                </div>
                            </div>
                            <div className=' flex justify-between items-center '>
                                <span>هزینه ارسال</span>
                                <span className=' text-main'>رایگان</span>
                            </div>
                        </div>
                        <div className="p-4 border-b-[2px] text-sm sm:text-base border-mainBorder space-y-3">
                            <div className=' flex justify-between items-center '>
                                <span>مجموع خرید بدون مالیات</span>
                                <div className=' text-main flex-center gap-1'>
                                    <span>123</span>
                                    <span>تومان</span>
                                </div>
                            </div>
                            <div className=' flex justify-between items-center '>
                                <span>مجموع خرید با مالیات</span>
                                <div className=' text-main flex-center gap-1'>
                                    <span>123</span>
                                    <span>تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-center gap-3 mt-6 px-4 text-white">
                        <div className="btn w-[50%] text-sm sm:text-base">
                            <Link href="shopCart.html">مشاهده سبد خرید</Link>
                        </div>
                        <div className="btn w-[50%] text-sm sm:text-base">
                            <Link href="checkout.html">
                                نهایی کردن خرید
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
