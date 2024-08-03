import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
export default function ShoppingCart({ isShoppingCartOpen, setIsShoppingCartOpen }) {

    return (
        <>
            <div className={`${isShoppingCartOpen ? 'mobile-nav--active' : ''} fixed top-0 left-0 w-screen h-screen z-50 translate-x-[-100%] mobile-nav-transition  invisible`}>
                {/* Black bg */}
                <div onClick={() => setIsShoppingCartOpen(prevState => !prevState)} className=' absolute inset-0 bg-mainBlack opacity-[0.3]'></div>
                <div className="mobile-nav--active relative h-full w-[270px] vsm:w-[350px] text-mainBlack bg-white z-10 overflow-y-auto  translate-x-[-100%] invisible opacity-0">
                    <div className=" flex justify-between items-center bg-mainBg px-4 py-3">
                        <h6 className=' uppercase font-medium'>SHOPPING CART (<span>1</span>)</h6>
                        <span className=' text-xl font-medium cursor-pointer' onClick={() => setIsShoppingCartOpen(prevState => !prevState)}>X</span>
                    </div>
                    <div className=" h-[52vh] overflow-y-auto border-[2px] border-mainBorder">
                        <div className=" flex justify-evenly items-center py-4 border-b-2 border-mainBorder">
                            <div className=" w-[70px] border-[2px] border-mainBorder rounded-lg">
                                <Link href="/">
                                    <Image src="/images/product/product-5.webp" alt="productImg" className=' rounded-lg' width={70} height={70} />
                                </Link>
                            </div>
                            <div>
                                <Link href="/" className=' text-sm vsm:text-base font-medium'>
                                    Leather Watch Band
                                </Link>
                                <div className=" flex items-center mt-2">
                                    <div className=" flex-center gap-2.5">
                                        <span className="  w-6 h-7 text-center font-medium inline-block rounded-2xl bg-mainBg">-</span>
                                        <span className="font-medium">5</span>
                                        <span className=" w-6 h-7 text-center font-medium inline-block rounded-2xl bg-mainBg">+</span>
                                    </div>
                                    <span className=' ml-3 text-main font-medium text-md vsm:text-lg'>$138.45</span>
                                </div>
                            </div>
                            <FaRegTrashAlt />
                        </div>
                    </div>
                    <div>
                        <div className=" p-4 border-b-[2px] border-mainBorder space-y-3">
                            <div className=' flex justify-between items-center font-medium'>
                                <span>1 item</span>
                                <span className=' text-main'>$692.25</span>
                            </div>
                            <div className=' flex justify-between items-center font-medium'>
                                <span>Shipping</span>
                                <span className=' text-main'>$7.00</span>
                            </div>
                        </div>
                        <div className="p-4 border-b-[2px] border-mainBorder space-y-3">
                            <div className=' flex justify-between items-center font-medium'>
                                <span>Total (tax excl.)</span>
                                <span className=" text-main">$699.25</span>
                            </div>
                            <div className=' flex justify-between items-center font-medium'>
                                <span>Total (tax incl.)</span>
                                <span className=" text-main">$699.25</span>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-center gap-3 mt-6 px-4 text-white">
                        <div className="btn w-[50%]">
                            <Link href="shopCart.html"> VIEW CART</Link>
                        </div>
                        <div className="btn w-[50%]">
                            <Link href="checkout.html">
                                CEACK OUT
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
