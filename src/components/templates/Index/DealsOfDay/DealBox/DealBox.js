import React from 'react'
import Btn from '@/components/modules/Btn/Btn'
import Image from 'next/image'

export default function DealBox({ bgPic ,  title , newPrice }) {
    return (
        <div class="relative rounded-lg">
            <Image src={`/images/banner/${bgPic}`} className=' -scale-x-100 w-full rounded-lg' width={657} height={512} alt="offer-img" />
            <div className=' absolute right-6 sm:right-14 top-8 sm:top-4 md:top-12'>
                <h5 className=' text-main text-sm sm:text-xl'>جشنواره روزانه</h5>
                <p className=' font-normal pt-1 text-sm hidden sm:block'>تعداد محدود</p>
                <h4 className=' font-morabba text-lg md:text-2xl w-48 sm:w-60 pt-2 pb-8 sm:py-2  md:py-5  tracking-wide'>{title}</h4>
                <div className=' mb-5 hidden sm:flex items-center gap-1 sm:gap-2'>

                    <div class="  flex-center gap-1 text-lg  line-through text-mainGray">
                        <span>{newPrice}</span>
                        <span>تومان</span>
                    </div>
                    <div class=" text-2xl flex-center gap-1 font-semibold text-main mr-2 ">
                        <span>{newPrice}</span>
                        <span>تومان</span>
                    </div>
                </div>
                <div>
                    <p className=' text-sm font-normal mb-1 sm:mb-4 hidden sm:block'>عجله کن! تخفیف داره تموم میشه</p>
                    <div class=" mb-2 md:mb-6 hidden sm:flex flex-row-reverse items-center justify-end gap-6">
                        <span className=' flex flex-col justify-center items-center '>
                            <span class=" bg-main text-white p-2 sm:p-3 text-sm sm:text-lg relative rounded-lg coundown-time">03</span>
                            <span class=" uppercase text-[12px] text-mainGray tracking-wide">روز</span>
                        </span>
                        <span className=' flex flex-col justify-center items-center '>
                            <span class=" bg-main text-white p-2 sm:p-3 text-sm sm:text-lg relative rounded-lg coundown-time">20</span>
                            <span class=" uppercase text-[12px] text-mainGray tracking-wide">ساعت</span>
                        </span>
                        <span className=' flex flex-col justify-center items-center '>
                            <span class=" bg-main text-white p-2 sm:p-3 text-sm sm:text-lg relative rounded-lg coundown-time">12</span>
                            <span class=" uppercase text-[12px] text-mainGray tracking-wide">دقیقه</span>
                        </span>
                        <span className=' flex flex-col justify-center items-center '>
                            <span class=" bg-main text-white p-2 sm:p-3 text-sm sm:text-lg relative rounded-lg ">33</span>
                            <span class=" uppercase text-[12px] text-mainGray tracking-wide ">ثانیه</span>
                        </span>

                    </div>
                    <Btn text="خرید محصول" style="text-white" />
                </div>

            </div>
        </div>

    )
}
