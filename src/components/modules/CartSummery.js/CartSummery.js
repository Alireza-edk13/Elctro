import React from 'react'
import Btn from '@/components/modules/Btn/Btn'

export default function CartSummery() {
    return (
        <div class=" bg-mainBg rounded-lg py-8 px-11 w-full">
            <h4 className=' text-xl mb-9 font-semibold'>فاکتور خرید</h4>
            <ul className=' space-y-6  child:flex child:justify-between child:items-center '>
                <li>
                    <span className=' font-semibold'>مجموع خرید :</span>
                    <span className=' text-mainGray text-sm'>199 تومان</span>
                </li>
                <li>
                    <span className=' font-semibold'>تخفیف :</span>
                    <span className=' text-mainGray text-sm'>0</span>
                </li>
                <li>
                    <span className=' font-semibold'> هزینه ارسال :</span>
                    <span className=' text-mainGray text-sm'>7 تومان</span>
                </li>
                <li>
                    <span className=' font-semibold'>مالیات :</span>
                    <span className=' text-mainGray text-sm'>رایگان</span>
                </li>

            </ul>
            <div class=" my-9 border-t-2 pt-6 border-mainBorder flex justify-between items-center">
                <span className=' font-semibold'>مجموع :</span>
                <span className='font-semibold text-main'>199.7 تومان</span>
            </div>
            <Btn text="نهایی کردن خرید" style=" text-white  w-full" />
        </div>
    )
}
