import React from 'react'
import OfferBox from './OfferBox/OfferBox'

export default function OfferBoxes() {
    return (
        <section>
            <div className='container mt-20'>
                <div className=' grid grid-cols-1 xl:grid-cols-3 gap-6'>
                    <OfferBox pic="offer1.webp" />
                    <OfferBox pic="offer2.webp" />
                    <OfferBox pic="offer3.webp" />
                </div>
            </div>
        </section>
    )
}
