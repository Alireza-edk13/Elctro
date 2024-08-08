import Btn from '@/components/modules/Btn/Btn'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Slide({ pic }) {
    return (
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-8 p-10 sm:p-16">
            <Link href="/">
                <Image src={`/images/slider/${pic}`} alt="img" width={367} height={400} />
            </Link>
            <div className=' my-auto order-last md:order-first'>
                <div class=" text-center space-y-6 ">
                    <h4 class=" text-main font-bold text-xl">تا 70 درصد تخفیف</h4>
                    <h2 class="font-bold font-morabba text-2xl sm:text-3xl sm:leading-[3rem] xxl:text-[2.5rem] xxl:leading-[3.5rem]">
                        <span>تا 70 درصد تخفیف در</span>
                        <div> فروشگاه <span class=" text-main">الکترو</span></div>
                    </h2>
                    <p class=" text-mainGray text-sm font-normal">
                        یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد
                    </p>
                    <div className=' flex-center'>
                        <Btn text="محصولات" style=" text-white mb-4" />
                    </div>
                </div>
            </div>


        </div>
    )
}
