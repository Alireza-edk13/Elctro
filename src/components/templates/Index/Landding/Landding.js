import React from 'react'
import SwiperBanners from './SwiperBanners/SwiperBanners'
import StaticBanners from './StaticBanners/StaticBanners'

export default function Landding() {
    return (
        <>
            <div className=' container my-6'>
                <div className=' grid grid-cols-12 gap-6'>
                    <div className=' col-span-12 2xl:col-span-8 bg-mainBg rounded-lg'>
                        <SwiperBanners />
                    </div>
                    <div className=' col-span-12 2xl:col-span-4 '>
                        <StaticBanners />
                    </div>
                </div>
            </div>
        </>
    )
}
