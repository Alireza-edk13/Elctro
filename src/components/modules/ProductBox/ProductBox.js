import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscGitCompare } from "react-icons/vsc";
import { MdOutlineRemoveRedEye } from "react-icons/md";


export default function ProductBox({ pic }) {
    return (
        <div className=" group hover:shadow-custom transition-all duration-200 ease-in mb-16">
            <div className=" bg-white overflow-hidden rounded-lg px-6">
                <div className=' relative'>
                    <span className=" absolute text-sm font-normal flex-center top-3 left-0 bg-main text-white px-3.5 py-1 rounded-full z-20">جدید</span>
                    <Link href="/" className="product-img">
                        <Image src={`/images/product/${pic}.webp`} className=' sm:group-hover:scale-110 transition-all duration-200 ease-in' width={352} height={352} alt="product" />
                    </Link>
                    <div className=" flex flex-col justify-center items-center sm:flex-row sm:opacity-0 transition-all duration-200 ease-in sm:group-hover:opacity-100 z-20 absolute right-0 top-8 left-auto sm:inset-0 xxl:bottom-auto xxl:right-auto xxl:top-24 xxl:left-7  gap-2">
                        <div className="p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white  text-xl shadow-custom rounded-lg product-btn compare">
                            <VscGitCompare />
                        </div>

                        <div className="p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white  text-xl shadow-custom rounded-lg product-btn addToFav">
                            <IoMdHeartEmpty />
                        </div>

                        <div className="p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white  text-xl shadow-custom rounded-lg product-btn view">
                            <MdOutlineRemoveRedEye />
                        </div>


                    </div>

                </div>
                <div className=" border-b z-20 mt-4 pb-3">
                    <Link href="/" className=' uppercase text-[13px] tracking-wide block text-mainGray'>هدفون</Link>
                    <Link href="/" className=' font-morabba transition-all duration-200 ease-in hover:text-main tracking-wide line-clamp-1 '>
                    هدفون بی سیم ایسوس                    
                    
                    </Link>
                </div>
                <div className=" flex justify-between items-center mt-3 mb-5 relative">
                    <div>
                        <div className=" flex items-center my-2 justify-start gap-1 text-yellow-400 text-sm">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <span className=" text-mainGray font-normal text-sm">60%</span>
                        <div className=' flex-center gap-1'>
                            <div className="text-sm  line-through text-mainGray">
                               182
                            </div>
                            <div className=" text-lg font-bold flex-center gap-1 text-main mr-1 ">
                                <span className=''>158</span>
                                <span className=''>تومان</span>
                            </div>

                        </div>
                    </div>
                    <div className="p-3 bg-mainBg cursor-pointer transition-all duration-200 ease-in hover:text-white hover:bg-main sm:hover:-translate-y-1 text-xl rounded-lg absolute left-0 bottom-0 product-btn addToCart">
                        <HiOutlineShoppingBag />
                    </div>
                </div>
            </div>
        </div>
    )
}
