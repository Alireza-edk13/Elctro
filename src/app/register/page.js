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
                    <div class="container">
                        <div className='flex items-center h-16 text-white'>
                            <Link href="/" class="  ">Home</Link>
                            <span class="mx-4 mt-1 cursor-pointer">
                                <MdNavigateNext className=' text-xl' />
                            </span>
                            <Link href="/register" class=" ">Register</Link>
                        </div>

                    </div>
                </header>
                <section>
                    <div class="container">
                        <div class="flex-center">
                            <form action="#" class="w-[430px] p-8 xs:p-12 rounded-lg shadow-custom bg-white  text-mainBlack space-y-6">
                                {/* <!-- logo --> */}
                                <div class="  text-center text-4xl sm:mb-4 md:mb-0">
                                    <Link href={'/'} className=' flex-center text-2xl md:text-4xl'>
                                        <PiShoppingCartSimpleFill className=' text-3xl md:text-5xl text-main' />
                                        <h3 className=' pl-1 font-semibold'>Elctro</h3>
                                    </Link>
                                    <h4 class="text-[#4f5d77] text-sm xs:text-base mt-3 font-morabba">Create your free Edk-Shop account
                                    </h4>
                                </div>
                                {/* <!-- input --> */}
                                <div class="flex flex-col relative">
                                    <input type="text" id="Name"
                                        class="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Name" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <FaUser className=' text-2xl' />
                                    </span>
                                </div>
                                <div class="flex flex-col relative">
                                    <input type="text" id="email"
                                        class="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Email" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <FaPhone className=' text-2xl' />
                                    </span>
                                </div>
                                <div class="flex flex-col relative">
                                    <input type="text" id="phone"
                                        class="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Phone" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <MdEmail className=' text-2xl' />
                                    </span>
                                </div>
                                <div class="flex flex-col relative">
                                    <input type="text" id="password"
                                        class="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Password" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <FaKey className=' text-2xl' />
                                    </span>
                                </div>
                                {/* <!-- checkout --> */}
                                <div class="flex items-center justify-between text-xs xs:text-sm text-[#687188]">
                                    <div class="flex items-center">
                                        <input class="size-[15px]" type="checkbox" name="checkbox" id="createAccount" value="" />

                                        <label class="relative cursor-pointer text-main" for="createAccount">
                                            <span class="ml-1 text-mainBlack" >I agree with the</span> Terms Of Service
                                        </label>

                                    </div>
                                </div>
                                {/* <!-- btn --> */}
                                <button type="submit" className=' w-full' >
                                    <Btn text="Register" style = "w-full text-white before:w-full"/>
                                </button>
                                {/* <!-- have account --> */}
                                <p class="text-sm text-[#687188] text-center">Already have an account?
                                    <Link href="/login" class="text-main ml-1">Login
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
