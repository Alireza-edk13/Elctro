import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
export default function NewProduct() {
    return (
        <div className=' border border-mainBorder rounded-lg p-10 my-6'>
            <h5 className=' font-semibold border-b pb-4 border-mainBorder mb-8'> جدید ترین محصولات</h5>

            <div className=' flex-center gap-2 border-b pb-4 border-mainBorder '>
                <Image src="/images/product/product-11.webp" width={100} height={100} alt="product" />
                <div className=' space-y-2'>
                    <h5 className=' text-main'>دوربین مداربسته</h5>
                    <span className=' text-xs'>153 تومان</span>
                    <div className=" flex items-center my-2 justify-start gap-1 text-yellow-400 text-xs">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

            </div>

            <div className=' flex-center gap-2 border-b pb-4 border-mainBorder '>
                <Image src="/images/product/product-5.webp" width={100} height={100} alt="product" />
                <div className=' space-y-2'>
                    <h5 className=' text-main'>ساعت هوشمند</h5>
                    <span className=' text-xs'>173 تومان</span>
                    <div className=" flex items-center my-2 justify-start gap-1 text-yellow-400 text-xs">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

            </div>

            <div className=' flex-center gap-2 '>
                <Image src="/images/product/product-8.webp" width={100} height={100} alt="product" />
                <div className=' space-y-2'>
                    <h5 className=' text-main'>هدفون ال جی</h5>
                    <span className=' text-xs'>129 تومان</span>
                    <div className=" flex items-center my-2 justify-start gap-1 text-yellow-400 text-xs">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>

            </div>
        </div>
    )
}
