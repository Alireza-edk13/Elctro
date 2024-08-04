import Btn from '@/components/modules/Btn/Btn'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Slide({pic}) {
    return (
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-8 p-10 sm:p-16">
            <div className=' my-auto order-last md:order-first'>
                <div class=" text-center space-y-6 ">
                    <h4 class=" text-main font-bold text-xl">UP TO 50% OFF</h4>
                    <h2 class="font-bold text-2xl sm:text-3xl sm:leading-[3rem] 2xl:text-[2.5rem] 2xl:leading-[3.5rem]">
                        <span>UP TO 50% OFF</span>
                        <div><span class=" text-main">Elctro</span> Shopping</div>
                    </h2>
                    <p class=" text-sm sm:text-base font-normal">
                        There are many variations of passages orem psum availablebut the majority have suffered alterationin some form by injected humour.
                    </p>
                    <div className=' flex-center'>
                        <Btn text="Shop Now" style=" text-white mb-4" />
                    </div>
                </div>
            </div>
            <Link href="/">
                <Image src={`/images/slider/${pic}`} alt="img" width={367} height={400} />
            </Link>

        </div>
    )
}
