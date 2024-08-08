import React from 'react'
import DealBox from './DealBox/DealBox'

export default function DealOfDay() {
    return (
        <section class="mt-20 mb-16">
            <div class="container">
                <div class=" grid grid-cols-1 2xl:grid-cols-2 gap-6">
                    <DealBox bgPic="menu-banner-7.webp" title ="هدفون های هوشمند با جدید ترین طرح ها" newPrice={245} />
                    <DealBox bgPic="menu-banner-8.webp" title ="لب تاپ های هوشمند با جدید ترین طرح ها" newPrice={374} />
                </div>
            </div>
        </section>
    )
}
