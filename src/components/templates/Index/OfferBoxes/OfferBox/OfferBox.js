import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function OfferBox({pic}) {
    return (
        <div className=" relative rounded-lg">
            <Image src={`/images/offer/${pic}`} className=' -scale-x-100 w-full h-auto rounded-lg' width={457} height={188} alt="offer-img" />
            <div className=" absolute right-0 pr-9 top-2 vsm:top-6 sm:top-9 xl:top-3 xxl:top-6">
                <span className='text-sm vsm:text-base text-mainGray'>جدید ترین</span>
                <h4 className=' my-2 font-morabba text-sm  vsm:text-lg  sm:text-xl tracking-wide w-40'> بهترین قیمت در ماه های گذشته</h4>
                <div>
                    <Link href="/" className='text-sm text-main'>مشاهده محصول</Link>
                </div>
            </div>
        </div>
    )
}
