import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import CartSummery from '@/components/modules/CartSummery.js/CartSummery'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

export default function cart() {
  return (
    <>
      <Breadcrumbs destination="سبد خرید" />
      <section className=' container mt-8'>
        <h4 className=' text-main mb-16'> سبد خرید شما :</h4>
        <div className=' grid grid-cols-12 gap-y-16 xl:gap-6 mb-36'>
          <div className=' col-span-12 xl:col-span-8'>
            <div className=' space-y-4'>
              <div className=' border-b border-mainBorder pb-2'>
                <div className=' grid grid-cols-12 gap-4 sm:gap-6 items-center'>
                  <div className=' col-span-6 md:col-span-2'>
                    <Link href="/">
                      <Image src="/images/product/product-5.webp" alt="productImg" className=' rounded-lg' width={122} height={122} />
                    </Link>
                  </div>
                  <div className=' col-span-6 md:col-span-3'>
                    <Link href="/" className=' text-sm sm:text-base line-clamp-1 '>
                      گلکسی واچ اولترا
                    </Link>
                    <span className=' my-2 text-mainGray text-sm sm:text-base'>مدل: ساعت</span>
                    <span className=' text-mainGray text-sm sm:text-base'>رنگ: مشکی</span>
                  </div>
                  <div className='  col-span-3 md:col-span-2'>
                    <span className=' line-through text-sm sm:text-base'>123 تومان</span>
                  </div>
                  <div className=' col-span-3 md:col-span-2 flex-center gap-1 sm:gap-3'>
                    <span className="  w-6 h-7 text-center  inline-block rounded-2xl bg-mainBg pt-1">-</span>
                    <span className="">5</span>
                    <span className=" w-6 h-7 text-center flex-center  inline-block rounded-2xl bg-mainBg pt-1">+</span>
                  </div>
                  <div className=' col-span-3 md:col-span-2'>
                    <span className=' text-main text-sm sm:text-lg'>123 تومان</span>
                  </div>
                  <div className=' col-span-1 md:col-span-1'>
                    <FaRegTrashAlt className=' min-w-5' />

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className=' col-span-12 xl:col-span-4'>
            <CartSummery text="نهایی کردن سفارش" />
          </div>
        </div>
      </section>
    </>
  )
}
