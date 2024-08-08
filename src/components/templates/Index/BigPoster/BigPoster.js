import Btn from '@/components/modules/Btn/Btn'
import React from 'react'

export default function BigPoster() {
    return (
        <section class="mt-20">
            <div class="container">
                <div class=" bg-bigPoster bg-bottom sm:bg-cover py-10 rounded-lg">
                    <div class=" flex flex-col justify-center items-center">
                        <h5 className=' font-semibold text-lg md:text-2xl'>بزرگ ترین کالکشن</h5>
                        <h4 className=' font-morabba text-2xl text-center md:text-4xl p-5 my-2 font-bold'>تا 70 درصد تخفیف بر روی تمام محصولات</h4>
                        <p className=' py-2 border-y border-mainBlack mb-5'>در تمامی شعبه ها</p>
                        <Btn text="خرید محصولات" style="text-white"/>
                    </div>

                </div>
            </div>
        </section>
    )
}
