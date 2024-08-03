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
                    <div class="container">
                        <div className='flex items-center h-16 text-white'>
                            <Link href="/" class="  ">Home</Link>
                            <span class="mx-4 mt-1 cursor-pointer">
                                <MdNavigateNext className=' text-xl' />
                            </span>
                            <Link href="/login" class=" ">Login</Link>
                        </div>

                    </div>
                </header>

                <section>
                    <div class="container">
                        <div class="flex-center">
                            <form action="#"
                                class="w-[430px] p-8 xs:p-12 rounded-lg shadow-custom bg-white  text-mainBlack space-y-6">
                                {/* <!-- logo --> */}
                                <div class="  text-center text-4xl sm:mb-4 md:mb-0">
                                    <Link href={'/'} className=' flex-center text-2xl md:text-4xl'>
                                        <PiShoppingCartSimpleFill className=' text-3xl md:text-5xl text-main' />
                                        <h3 className=' pl-1 font-semibold'>Elctro</h3>
                                    </Link>
                                    <h4 class="text-[#4f5d77] text-sm xs:text-base mt-3 font-Roboto">Create your free Edk-Shop account
                                    </h4>
                                </div>
                                {/* <!-- input --> */}

                                <div class="flex flex-col relative">
                                    <input type="text" id="Email"
                                        class="  text-sm h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Email" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <MdEmail className=' text-2xl' />
                                    </span>
                                </div>
                                <div class="flex flex-col relative">
                                    <input type="text" id="password"
                                        class="  text-sm h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="Password" autocomplete="off" />
                                    <span className='absolute right-4 top-3 text-main'>
                                        <FaKey className=' text-2xl' />
                                    </span>
                                </div>
                                <div class="flex items-center justify-between text-xs xs:text-sm text-[#687188]">
                                    <div class="flex items-center">
                                        <input class="size-md " type="checkbox" name="checkbox" id="createAccount" value="" />
                                        <label class="relative cursor-pointer" for="createAccount"><span class="ml-1">Remeber
                                            Me</span></label>
                                    </div>
                                    <span><Link href="#">
                                        Forgot Password?
                                    </Link></span>
                                </div>


                                <button type="submit" class="w-full">
                                    <Btn text="Login" style="w-full text-white before:w-full" />

                                </button>


                                <p class="text-sm text-[#687188] text-center">Don't have an account?
                                    <Link href="/register" class="text-main ml-1">Register
                                    </Link>
                                </p>

                                <div class="relative border-t border-solid border-[#f4f5f9] space-y-6">
                                    <span class="text-[#687188] absolute -top-[13px] left-[50%]">or</span>
                                    <p class="text-[#687188] text-center text-sm">Continue with social media</p>
                                    <div
                                        class="grid grid-cols-2 xs:grid-cols-3 gap-2 xs:gap-1 text-center text-sm child:py-2 child:px-4 child:rounded-full child:border-solid child:border-2 child:flex-center child:gap-2">
                                        <Link href="#" class="border-main text-main transition-all ease-in  duration-75 hover:bg-main hover:text-white">
                                            <FaFacebook />
                                            Facebook
                                        </Link>
                                        <Link href="#" class="border-main text-main transition-all ease-in  duration-75 hover:bg-main hover:text-white">
                                            <FaGoogle />
                                            Google
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
