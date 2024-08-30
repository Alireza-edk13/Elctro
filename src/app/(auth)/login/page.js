"use client";
import Link from 'next/link'
import React from 'react'
import { FaKey } from 'react-icons/fa';
import { MdNavigateNext } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useFormik } from 'formik';
import { loginValidator } from '@/validators/auth';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useLoginUserMutation } from '@/redux/api/authApi';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";


export default function login() {

    const [loginUser, { data, error, isLoading }] = useLoginUserMutation();
    const router = useRouter();


    const onSubmitHandler = async (userInfo) => {
        try {
            const result = await loginUser(userInfo).unwrap();
            toast.success(result.message)
            router.replace("/");
            router.refresh()

        } catch (err) {
            toast.error(err?.data?.message)
        }
    };

    const form = useFormik({
        initialValues: { password: "", phone: "" },

        onSubmit: (values) => {
            onSubmitHandler(values);
        },

        validationSchema: loginValidator,
    });




    return (
        <>
            <div className='bg-mainBlack h-screen'>
                <header>
                    <div className="container">
                        <div className='flex items-center text-sm h-16 text-white'>
                            <Link href="/">صفحه اصلی</Link>
                            <span className=" mx-2 cursor-pointer">
                                <MdNavigateNext className=' rotate-180 text-lg ' />
                            </span>
                            <Link href="/login">ورود</Link>
                        </div>

                    </div>
                </header>

                <section>
                    <div className="container">
                        <div className="flex-center">
                            <form onSubmit={form.handleSubmit}
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

                                <div className=' flex flex-col gap-y-6'>
                                    <div className="flex flex-col relative">
                                        <input type="text" id="phone"
                                            className="border-none outline-none text-sm sm:text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                            placeholder="شماره همراه"
                                            name='phone'
                                            value={form.values.phone}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                        <span className='absolute left-4 top-3 text-main'>
                                            <FaPhone className=' text-2xl' />
                                        </span>
                                        {
                                            form.errors.phone && form.touched.phone && <label htmlFor="phone" className='text-red-500 text-xs mt-2'>{form.errors.phone}</label>
                                        }
                                    </div>

                                    <div className="flex flex-col relative">
                                        <input type="text" id="password"
                                            className="border-none outline-none text-sm sm:text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                            placeholder="رمز عبور"
                                            name='password'
                                            value={form.values.password.trim()}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                        <span className='absolute left-4 top-3 text-main'>
                                            <FaKey className=' text-2xl' />
                                        </span>
                                        {
                                            form.errors.password && form.touched.password && <label htmlFor="password" className='text-red-500 text-xs mt-2'>{form.errors.password}</label>
                                        }
                                    </div>

                                </div>


                                <div className="flex items-center  text-xs xs:text-sm text-[#687188]">

                                    <span><Link href="#">
                                        رمز عبور فراموش کردی؟
                                    </Link></span>
                                </div>

                                {/* <!-- btn --> */}

                                <button type="submit" className=' w-full' disabled={isLoading}  >
                                    <div className={` btn w-full before:w-full ${isLoading && "bg-mainBlack"} text-white`}>
                                        <span className=' text-sm '>
                                            {isLoading ? "لطفا منتظر بمانید ..." : "ورود"}
                                        </span>
                                        {
                                            !isLoading &&
                                            <IoIosArrowRoundForward className=' text-2xl rotate-180' />
                                        }
                                    </div>
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
