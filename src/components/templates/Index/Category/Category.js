import TopSectionTitle from '@/components/modules/TopSectionTitle/TopSectionTitle'

import React from 'react'
import CategoryBox from './CategoryBox/CategoryBox'

export default function Category() {
    return (
        <>
            <section>
                <div className=' container mt-20'>
                    <TopSectionTitle title=" دسته بندی ها" />
                    <div className=' grid grid-cols-2 md:grid-cols-3 xxl:grid-cols-6 gap-6'>
                        <CategoryBox icon="PiPlugChargingFill" name="لوازم جانبی" number="20" />
                        <CategoryBox icon="PiDesktopTower" name="کامپیوتر" number="11" />
                        <CategoryBox icon="FaHeadphones" name="هدفون" number="07" />
                        <CategoryBox icon="FaCamera" name="دوربین" number="13" />
                        <CategoryBox icon="FaLaptop" name="لب تاپ" number="32" />
                        <CategoryBox icon="FaMobile" name="موبایل" number="21" />
                        <CategoryBox icon="FaHeadphones" name="هدفون" number="07" />
                        <CategoryBox icon="FaCamera" name="دوربین" number="13" />
                        <CategoryBox icon="FaLaptop" name="لب تاپ" number="32" />
                        <CategoryBox icon="PiDesktopTower" name="کامپیوتر" number="11" />
                        <CategoryBox icon="FaMobile" name="موبایل" number="21" />
                        <CategoryBox icon="PiPlugChargingFill" name="لوازم جانبی" number="20" />
                    </div>
                </div>
            </section>
        </>
    )
}
