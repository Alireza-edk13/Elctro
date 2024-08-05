import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscGitCompare } from "react-icons/vsc";
import { MdOutlineRemoveRedEye } from "react-icons/md";


export default function ProductBox({pic}) {
    return (
        <div class=" group hover:shadow-custom transition-all duration-200 ease-in mb-16">
            <div class=" bg-white overflow-hidden rounded-lg px-6">
                <div className=' relative'>
                    <span class=" absolute text-sm font-normal flex-center top-3 left-0 bg-main text-white px-3.5 py-1 rounded-full z-20">New</span>
                    <Link href="/" class="product-img">
                        <Image src={`/images/product/${pic}.webp`} className=' sm:group-hover:scale-110 transition-all duration-200 ease-in' width={352} height={352} alt="product" />
                    </Link>
                    <div class=" flex flex-col justify-center items-center sm:flex-row sm:opacity-0 transition-all duration-200 ease-in sm:group-hover:opacity-100 z-20 absolute right-0 top-8 left-auto sm:inset-0 xxl:bottom-auto xxl:right-auto xxl:top-24 xxl:left-7  gap-2">
                        <div class="p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white  text-xl shadow-custom rounded-lg product-btn addToFav">
                            <IoMdHeartEmpty />
                        </div>

                        <div class="p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white  text-xl shadow-custom rounded-lg product-btn view">
                            <MdOutlineRemoveRedEye />
                        </div>

                        <div class="p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white  text-xl shadow-custom rounded-lg product-btn compare">
                            <VscGitCompare />
                        </div>
                    </div>

                </div>
                <div class=" border-b z-20 mt-4 pb-3">
                    <Link href="/" className=' uppercase text-[13px] tracking-wide block text-mainGray'>music</Link>
                    <Link href="/" className=' transition-all duration-200 ease-in hover:text-main tracking-wide '>Headphone Asus</Link>
                </div>
                <div class=" flex justify-between items-center mt-3 mb-5 relative">
                    <div>
                        <div class=" flex items-center my-2 justify-start gap-1 text-yellow-400 text-sm">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <span class=" text-mainGray font-normal text-sm">60%</span>
                        <div className=''>
                            <span class=" text-lg font-bold text-main mr-1 ">$438.45</span>
                            <span class="text-sm  line-through text-mainGray">$310.2</span>
                        </div>
                    </div>
                    <div class="p-3 bg-mainBg cursor-pointer transition-all duration-200 ease-in hover:text-white hover:bg-main sm:hover:-translate-y-1 text-xl rounded-lg absolute right-0 bottom-0 product-btn addToCart">
                        <HiOutlineShoppingBag />
                    </div>
                </div>
            </div>
        </div>
    )
}
