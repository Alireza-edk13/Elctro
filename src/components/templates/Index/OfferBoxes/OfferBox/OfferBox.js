import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function OfferBox({pic}) {
    return (
        <div class=" relative rounded-lg">
            <Image src={`/images/offer/${pic}`} className=' w-full rounded-lg' width={457} height={188} alt="offer-img" />
            <div class=" absolute left-0 pl-9 top-2 vsm:top-6 sm:top-9 xl:top-3 xxl:top-6">
                <span className='text-sm vsm:text-base text-mainGray'>New Arrivals</span>
                <h4 className=' my-2 text-sm  vsm:text-lg  sm:text-xl font-semibold w-40'>Shop Today’s Deals &amp; Offers</h4>
                <div>
                    <Link href="/" className='text-sm vsm:text-base text-main'>Shop now</Link>
                </div>
            </div>
        </div>
    )
}
