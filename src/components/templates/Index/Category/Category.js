import TopSectionTitle from '@/components/modules/TopSectionTitle/TopSectionTitle'

import React from 'react'
import CategoryBox from './CategoryBox/CategoryBox'

export default function Category() {
    return (
        <>
            <section>
                <div className=' container mt-20'>
                    <TopSectionTitle title="Top Category" />
                    <div className=' grid grid-cols-2 md:grid-cols-3 xxl:grid-cols-6 gap-6'>
                        <CategoryBox icon="PiPlugChargingFill" name="Accessories" number="20" />
                        <CategoryBox icon="PiDesktopTower" name="Desktop" number="11" />
                        <CategoryBox icon="FaHeadphones" name="Headphones" number="07" />
                        <CategoryBox icon="FaCamera" name="Camera" number="13" />
                        <CategoryBox icon="FaLaptop" name="Laptop" number="32" />
                        <CategoryBox icon="FaMobile" name="Mobile" number="21" />
                        <CategoryBox icon="FaHeadphones" name="Headphones" number="07" />
                        <CategoryBox icon="FaLaptop" name="Laptop" number="32" />
                        <CategoryBox icon="FaMobile" name="Mobile" number="21" />
                        <CategoryBox icon="PiDesktopTower" name="Desktop" number="11" />
                        <CategoryBox icon="FaCamera" name="Camera" number="13" />
                        <CategoryBox icon="PiPlugChargingFill" name="Accessories" number="20" />

                    </div>
                </div>
            </section>
        </>
    )
}
