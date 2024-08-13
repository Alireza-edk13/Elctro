import Link from 'next/link'
import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import Button from '@/components/modules/Button/Button';
export default function register() {
    return (
        <>
            <div className=' bg-mainBlack h-screen'>
                <header>
                    <div className="container">
                        <div className='flex items-center justify-end h-16 text-white'>
                            <Link href="/register">ثبت نام</Link>
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
                            <form action="#" className="w-[430px] p-8 xs:p-12 rounded-lg shadow-custom bg-white  text-mainBlack space-y-6">
                                {/* <!-- logo --> */}
                                <div className="  text-center text-4xl sm:mb-4 md:mb-0">
                                    <Link href={'/'} className=' flex-center text-main text-3xl md:text-4xl'>
                                        <PiShoppingCartSimpleFill className=' text-4xl md:text-5xl' />
                                        <h3 className=' font-morabba pl-1 '>الکتروشاپ</h3>
                                    </Link>
                                    <h4 className="text-[#4f5d77] text-sm xs:text-base mt-3 font-morabba"> ساخت اکانت در فروشگاه الکتروشاپ
                                    </h4>
                                </div>
                                {/* <!-- input --> */}
                                <div className="flex flex-col relative">
                                    <input type="text" id="Name"
                                        className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="اسم" autoComplete="off" />
                                    <span className='absolute left-4 top-3 text-main'>
                                        <FaUser className=' text-2xl' />
                                    </span>
                                </div>
                                <div className="flex flex-col relative">
                                    <input type="text" id="email"
                                        className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="ایمیل" autoComplete="off" />
                                    <span className='absolute left-4 top-3 text-main'>
                                        <FaPhone className=' text-2xl' />
                                    </span>
                                </div>
                                <div className="flex flex-col relative">
                                    <input type="text" id="phone"
                                        className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="شماره همراه" autoComplete="off" />
                                    <span className='absolute left-4 top-3 text-main'>
                                        <MdEmail className=' text-2xl' />
                                    </span>
                                </div>
                                <div className="flex flex-col relative">
                                    <input type="text" id="password"
                                        className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="رمز عبور" autoComplete="off" />
                                    <span className='absolute left-4 top-3 text-main'>
                                        <FaKey className=' text-2xl' />
                                    </span>
                                </div>
                                {/* <!-- checkout --> */}
                                <div className="flex items-center justify-between text-xs xs:text-sm text-[#687188]">
                                    <div className="flex items-center">
                                        <input className="size-[15px]" type="checkbox" name="checkbox" id="createAccount" value="" />

                                        <label className="relative cursor-pointer text-main" for="createAccount">
                                            <span className="mr-1 text-mainBlack" >من  موافق هستم با</span> قوانین سایت
                                        </label>

                                    </div>
                                </div>
                                {/* <!-- btn --> */}
                                <button type="submit" className=' w-full' >
                                    <Button text="ثبت نام" style="w-full text-white before:w-full" />
                                </button>
                                {/* <!-- have account --> */}
                                <p className="text-sm text-[#687188] text-center">قبلا اکانت داشتی؟
                                    <Link href="/login" className="text-main mr-1">ورود
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
