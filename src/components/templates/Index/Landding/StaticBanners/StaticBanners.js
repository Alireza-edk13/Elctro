import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function StaticBanners() {
    return (
        <>

            <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 2xl:block 2xl:space-y-6'>
                <div class=" relative rounded-lg w-full">
                    <Image src="/images/banner/ban2.webp" className=' rounded-lg w-full' alt="img" width={442} height={248} />
                    <div class=" absolute left-8 top-7 sm:top-10">
                        <span class=" bg-main text-sm text-white w-6 h-4 py-2 px-4 rounded-full font-normal">HOT SALE</span>
                        <h4 class=" my-4 vvsm:my-6 text-sm  vvsm:text-lg sm:text-xl font-semibold w-40 vvsm:w-52">Best Laptop Sale Collections</h4>
                        <Link href="/" className=' text-sm border-b-[3px] border-mainBlack pb-1'>DISCOVER NOW</Link>
                    </div>
                </div>
                <div class=" relative rounded-lg w-full">
                    <Image src="/images/banner/ban1.webp" className=' rounded-lg w-full' alt="img" width={442} height={248} />
                    <div class=" absolute left-8 top-7 sm:top-10">
                        <span class=" bg-main text-sm text-white w-6 h-4 py-2 px-4 rounded-full font-normal">HOT SALE</span>
                        <h4 class=" my-4 vvsm:my-6 text-sm  vvsm:text-lg  sm:text-xl font-semibold w-40 vvsm:w-52">Best Laptop Sale Collections</h4>
                        <Link href="/" className=' text-sm border-b-[3px] border-mainBlack pb-1'>DISCOVER NOW</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
