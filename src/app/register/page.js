import Link from 'next/link'
import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import Btn from '@/components/modules/Btn/Btn';
export default function register() {
    return (
        <>
            <div className=' bg-mainBlack h-screen'>
                <header>
                    <div className="container">
                        <div className='flex items-center h-16 text-white'>
                            <Link href="/" className="  ">Home</Link>
                            <span className="mx-4 mt-1 cursor-pointer">
                                <MdNavigateNext className=' text-xl' />
                            </span>
                            <Link href="/register" className=" ">Register</Link>
                        </div>

                    </div>
                </header>
                <section>
                    <div className="container">
                        <div className="flex-center">
                            <form action="#" className="w-[430px] p-8 xs:p-12 rounded-lg shadow-custom bg-white  text-mainBlack space-y-6">
                                {/* <!-- logo --> */}
                                <div className="  text-center text-4xl sm:mb-4 md:mb-0">
                                    <Link href={'/'} className=' flex-center text-2xl md:text-4xl'>
                                        <PiShoppingCartSimpleFill className=' text-3xl md:text-5xl text-main' />
                                        <h3 className=' pl-1 font-semibold'>Elctro</h3>
                                    </Link>
                                    <h4 className="text-[#4f5d77] text-sm xs:text-base mt-3 font-morabba">Create your free Edk-Shop account
                                    </h4>
                                </div>
                                {/* <!-- input --> */}
                                <div className="flex flex-col relative">
                                    <input type="text" id="Name"
                                        className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Name" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <FaUser className=' text-2xl' />
                                    </span>
                                </div>
                                <div className="flex flex-col relative">
                                    <input type="text" id="email"
                                        className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Email" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <FaPhone className=' text-2xl' />
                                    </span>
                                </div>
                                <div className="flex flex-col relative">
                                    <input type="text" id="phone"
                                        className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Phone" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <MdEmail className=' text-2xl' />
                                    </span>
                                </div>
                                <div className="flex flex-col relative">
                                    <input type="text" id="password"
                                        className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Password" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <FaKey className=' text-2xl' />
                                    </span>
                                </div>
                                {/* <!-- checkout --> */}
                                <div className="flex items-center justify-between text-xs xs:text-sm text-[#687188]">
                                    <div className="flex items-center">
                                        <input className="size-[15px]" type="checkbox" name="checkbox" id="createAccount" value="" />

                                        <label className="relative cursor-pointer text-main" for="createAccount">
                                            <span className="ml-1 text-mainBlack" >I agree with the</span> Terms Of Service
                                        </label>

                                    </div>
                                </div>
                                {/* <!-- btn --> */}
                                <button type="submit" className=' w-full' >
                                    <Btn text="Register" style = "w-full text-white before:w-full"/>
                                </button>
                                {/* <!-- have account --> */}
                                <p className="text-sm text-[#687188] text-center">Already have an account?
                                    <Link href="/login" className="text-main ml-1">Login
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
