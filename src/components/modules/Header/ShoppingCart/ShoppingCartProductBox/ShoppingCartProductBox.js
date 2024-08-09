import React from 'react'
import Link from 'next/link';
import { FaRegTrashAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function ShoppingCartProductBox() {
    return (
        <div className=" flex justify-evenly items-center py-4 border-b-2 border-mainBorder px-2">
            <div className=" min-w-[70px] border-[2px] border-mainBorder rounded-lg">
                <Link href="/">
                    <Image src="/images/product/product-5.webp" alt="productImg" className=' rounded-lg' width={70} height={70} />
                </Link>
            </div>
            <div className=' px-2'>
                <Link href="/" className=' text-sm sm:text-base line-clamp-1 '>
                    گلکسی واچ اولترا
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
            <FaRegTrashAlt className=' min-w-5' />
        </div>
    )
}
