import Btn from '@/components/modules/Btn/Btn'
import React from 'react'

export default function BigPoster() {
    return (
        <section class="mt-20">
            <div class="container">
                <div class=" bg-bigPoster py-10 rounded-lg">
                    <div class=" flex flex-col justify-center items-center">
                        <h5 className=' font-semibold text-2xl'>mega collections</h5>
                        <h4 className=' text-4xl p-5 my-2 font-bold'>HUGE SALE UP TO 40% OFF</h4>
                        <p className=' py-2 border-y border-mainBlack mb-5'>at our outlet stores</p>
                        <Btn text="Shop Now" style="text-white"/>
                    </div>

                </div>
            </div>
        </section>
    )
}
