import React from 'react'
import ProductDetailsSlider from '@/components/templates/ProductDetails/ProductDetailsSlider/ProductDetailsSlider'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa'
import { MdNavigateNext } from 'react-icons/md'
import { CgSandClock } from "react-icons/cg";
import { GrSend } from "react-icons/gr";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import RelatedProducts from '@/components/templates/ProductDetails/RelatedProducts/RelatedProducts';
import Tabs from '@/components/templates/ProductDetails/Tabs/Tabs';
import Button from '@/components/modules/Button/Button'
export default function page({ params }) {



    return (
        <>

            <section className=' bg-mainBg font-semibold text-xs sm:text-sm'>
                <div className="container">
                    <div className='flex items-center h-14'>
                        <Link href="/" className=' text-mainGray'>صفحه اصلی</Link>
                        <span className=" mx-0.5 xs:mx-3  cursor-pointer">
                            <MdNavigateNext className=' text-xl rotate-180 text-mainGray' />
                        </span>
                        <Link href={'/'} className=' text-main'>{params.slug[0]}</Link>
                        <span className=" mx-0.5 xs:mx-3  cursor-pointer">
                            <MdNavigateNext className=' text-xl rotate-180 text-mainGray' />
                        </span>
                        <Link href={'/'} className=' text-main'>{params.slug[1]}</Link>

                    </div>

                </div>
            </section>

            <section className=' container mt-8'>

                <section className=' grid grid-cols-12 gap-6'>
                    <div className=' col-span-12 lg:col-span-5'>
                        <ProductDetailsSlider />
                    </div>
                    <div className=' col-span-12 lg:col-span-7'>
                        <div class=" p-4">

                            <h2 className=' text-main text-xl sm:text-2xl mb-2 font-bold'>گلکسی واچ اولترا نسخه کلاسیک</h2>

                            <div class="flex justify-between items-center border-b border-mainBorder pb-4">
                                <span className=' text-xs sm:text-sm'>برند: <Link href={'/'} className=''>اپل</Link></span>
                                <div className=' flex-center text-xs sm:text-sm gap-1'>
                                    <div className=" flex items-center my-2 justify-start gap-1 text-main ">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <span>(4 کامنت)</span>
                                </div>

                            </div>
                            <div class=" flex items-center gap-2 sm:gap-5 mt-4 border-b border-mainBorder pb-4">
                                <sapn class=" text-main font-bold text-xl sm:text-2xl">456 تومان</sapn>
                                <sapn class=" line-through text-mainGray text-sm">756 تومان</sapn>
                                <sapn class=" text-sm text-main">50% تخفیف</sapn>
                            </div>
                            <div class=" mt-6 space-y-10">
                                <div class="shop-single-descrip">
                                    <p className=' text-xs sm:text-md leading-6 tracking-wide'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد

                                    </p>
                                </div>
                                <ul className=' space-y-2'>
                                    <li className=' flex items-center text-xs gap-1 text-mainGray'>
                                        <CgSandClock />
                                        <span>یک سال گارانتی</span>
                                    </li>
                                    <li className=' flex items-center text-xs gap-1 text-mainGray'>
                                        <GrSend />
                                        <span>تا 30 روز ضمانت بازگشت</span>
                                    </li>
                                    <li className=' flex items-center text-xs gap-1 text-mainGray'>
                                        <FaMoneyCheckDollar />
                                        <span>امکان پرداخت درب منزل</span>
                                    </li>
                                </ul>
                                <div class=" flex items-center gap-2">
                                    <span class=" text-sm">رنگ  ها: </span>
                                    <ul class=" flex items-center gap-2 child:cursor-pointer">
                                        <li className=' relative rounded-full bg-red-500 border p-3'>
                                            <span className=' rounded-full p-1 top-0 right-0 absolute bg-main'></span>
                                        </li>
                                        <li className=' rounded-full bg-black border p-3'></li>
                                        <li className=' rounded-full bg-white border p-3'></li>
                                        <li className=' rounded-full bg-yellow-500 border p-3'></li>
                                    </ul>
                                </div>
                                <div className=' border-b border-b-mainBorder pb-8'>
                                    <Button text="اضافه کردن به سبد خرید" style=" w-full md:w-48" />

                                </div>
                                <ul class=" space-y-2">
                                    <li className='flex items-center gap-1 text-xs'>
                                        <span>ایدی:</span>
                                        <span className=' text-main'>B132ko</span>
                                    </li>
                                    <li className='flex items-center gap-1 text-xs'>
                                        <span>دسته بندی</span>
                                        <span className=' text-main'>ساعت</span>
                                    </li>
                                    <li className='flex items-center gap-1 text-xs'>
                                        <span>موجودی :</span>
                                        <span className=' text-green-500'>6 عدد در انبار موجود است</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
                <Tabs />
                <section>
                    <RelatedProducts />
                </section>
            </section>




        </>
    )
}
