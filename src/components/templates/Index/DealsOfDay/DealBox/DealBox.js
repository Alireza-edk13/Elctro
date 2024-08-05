import React from 'react'
import Btn from '@/components/modules/Btn/Btn'

export default function DealBox({bgPic}) {
    return (
        <div class={`${bgPic} bg-center bg-no-repeat bg-cover p-16  rounded-lg`}>
            <h5 className=' text-main text-xl'>Deal of the Day</h5>
            <p className=' font-normal pt-1 text-sm'>Limited quantities</p>
            <h4 className=' text-2xl w-60  py-5'>Smart Headphone New Morden Design</h4>
            <div className=' mb-5'>
                <span class=" text-2xl font-semibold text-main mr-2 ">$438.45</span>
                <span class="text-lg  line-through text-mainGray">$310.2</span>
            </div>
            <div>
                <p className=' text-sm font-normal mb-4'>Hurry Up! Offer End In:</p>
                <div class=" mb-6 flex items-center gap-6">
                    <span className=' flex flex-col justify-center items-center '>
                        <span class=" bg-main text-white p-3 text-lg relative rounded-lg coundown-time">03</span>
                        <span class=" uppercase text-[12px] text-mainGray tracking-wide">days</span>
                    </span>
                    <span className=' flex flex-col justify-center items-center '>
                        <span class=" bg-main text-white p-3 text-lg relative rounded-lg coundown-time">20</span>
                        <span class=" uppercase text-[12px] text-mainGray tracking-wide">Hours</span>
                    </span>
                    <span className=' flex flex-col justify-center items-center '>
                        <span class=" bg-main text-white p-3 text-lg relative rounded-lg coundown-time">12</span>
                        <span class=" uppercase text-[12px] text-mainGray tracking-wide">Mins</span>
                    </span>
                    <span className=' flex flex-col justify-center items-center '>
                        <span class=" bg-main text-white p-3 text-lg relative rounded-lg">33</span>
                        <span class=" uppercase text-[12px] text-mainGray tracking-wide">Sec</span>
                    </span>

                </div>
                <Btn text="Shop Now" style="text-white" />
            </div>

        </div>

    )
}
