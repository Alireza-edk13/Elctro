import React from 'react'
import DealBox from './DealBox/DealBox'

export default function DealOfDay() {
    return (
        <section class="mt-20 mb-16">
            <div class="container">
                <div class=" grid grid-cols-2 gap-6">
                    <DealBox bgPic="bg-dealBg1" />
                    <DealBox bgPic="bg-dealBg2" />
                </div>
            </div>
        </section>
    )
}
