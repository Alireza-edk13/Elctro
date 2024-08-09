import Btn from '@/components/modules/Btn/Btn';
import Link from 'next/link'
import React from 'react'
import { FaKey } from 'react-icons/fa';
import { MdEmail, MdNavigateNext } from "react-icons/md";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function login() {
    return (
        <>
            <div className='bg-mainBlack h-screen'>
                <header>
                    <div className="container">
                        <div className='flex items-center justify-end h-16 text-white'>
                            <Link href="/login">ورود</Link>
                            <span className="mx-4  cursor-pointer">
                                <MdNavigateNext className=' text-xl' />
                            </span>
                            <Link href="/">صفحه اصلی</Link>
                        </div>

                    </div>
                </header>


                <section>
                    <div className="container">
                        <div className="flex-center">
                            <form action="#"
                                className="w-[430px] p-8 xs:p-12 rounded-lg shadow-custom bg-white  text-mainBlack space-y-6">
                                {/* <!-- logo --> */}
                                <div className="  text-center text-4xl sm:mb-4 md:mb-0">
                                    <Link href={'/'} className=' flex-center text-main text-3xl md:text-4xl'>
                                        <PiShoppingCartSimpleFill className=' text-4xl md:text-5xl' />
                                        <h3 className=' font-morabba pl-1 '>الکتروشاپ</h3>
                                    </Link>
                                    <h4 className="text-[#4f5d77] text-sm xs:text-base mt-3 font-morabba"> ورود به اکانت فروشگاه الکتروشاپ
                                    </h4>
                                </div>
                                {/* <!-- input --> */}

                                <div className="flex flex-col relative">
                                    <input type="text" id="Email"
                                        className="  text-sm h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="ایمیل" autocomplete="off" />
                                    <span className='absolute  left-4 top-3 text-main'>
                                        <MdEmail className=' text-2xl' />
                                    </span>
                                </div>
                                <div className="flex flex-col relative">
                                    <input type="text" id="password"
                                        className="  text-sm h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="رمز عبور" autocomplete="off" />
                                    <span className='absolute  left-4 top-3 text-main'>
                                        <FaKey className=' text-2xl' />
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs xs:text-sm text-[#687188]">
                                    <div className="flex items-center">
                                        <input className="size-md " type="checkbox" name="checkbox" id="createAccount" value="" />
                                        <label className="relative cursor-pointer" for="createAccount"><span className="mr-1">منو یادت نره</span></label>
                                    </div>
                                    <span><Link href="#">
                                        رمز عبور فراموش کردی؟
                                    </Link></span>
                                </div>


                                <button type="submit" className="w-full">
                                    <Btn text="ورود" style="w-full text-white before:w-full" />

                                </button>


                                <p className="text-sm text-[#687188] text-center">اکانت نداری؟
                                    <Link href="/register" className="text-main mr-1">ثبت نام
                                    </Link>
                                </p>

                                <div className="relative border-t border-solid border-[#f4f5f9] space-y-6">
                                    <span className="text-[#687188] absolute -top-[13px] left-[50%]">یا</span>
                                    <p className="text-[#687188] text-center text-sm">ورود از طریق شبکه های اجتماعی</p>
                                    <div
                                        className="grid grid-cols-2 xs:grid-cols-3 gap-2 xs:gap-1 text-center text-sm child:py-2 child:px-4 child:rounded-full child:border-solid child:border-2 child:flex-center child:gap-2">
                                        <Link href="#" className="border-main text-main transition-all ease-in  duration-75 hover:bg-main hover:text-white">
                                            Facebook
                                            <FaFacebook className=' -mt-1.5' />
                                        </Link>
                                        <Link href="#" className="border-main text-main transition-all ease-in  duration-75 hover:bg-main hover:text-white">
                                            Google
                                            <FaGoogle className=' -mt-1.5' />
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
