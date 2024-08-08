import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Brand({pic}) {
    return (
        <div class=" p-6">
            <Link href="/">
                <Image src={`/images/brand/${pic}.webp`} width={270} height={270} alt="brandImg"/>
            </Link>
        </div>
    )
}
