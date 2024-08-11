"use client";
import React, { useState } from 'react'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import CartSummery from '@/components/modules/CartSummery.js/CartSummery'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaGem } from "react-icons/fa";
import Btn from '@/components/modules/Btn/Btn';
export default function checkout() {

  const [isUserWantToCreateAccount, setIsUserWantToCreateAccount] = useState(false)
  const [isUserWantToLogin, setIsUserWantToLogin] = useState(false)
  const [isIsApplyCodeBoxOpen, setIsApplyCodeBoxOpen] = useState(false)
  return (
    <>
      <Breadcrumbs destination="صورت حساب" />
      <section className=' container mt-8'>

        <div className=' grid grid-cols-12 gap-6 my-16 border-b-[3px] border-mainBorder pb-8'>
          <div className=' col-span-12 lg:col-span-6'>
            <div className=' bg-[#f4f5f9] flex items-center cursor-pointer gap-0.5 vsm:gap-2 py-4 px-2 vsm:p-4 lg:mb-8 rounded-lg ' onClick={() => {
              setIsUserWantToLogin(prevState => !prevState)
            }}>
              <FaUser className=' text-main mb-1 ml-0.5 vsm:ml-0' />
              <span className='text-[#8e8e90] text-xs sm:text-base tracking-tighter vsm:tracking-normal'>قبلا ثبت نام کردی؟</span>
              <span className=' text-main text-xs sm:text-sm'>برای ورود اینجا رو کلیک کن</span>
            </div>

            <div className={` ${isUserWantToLogin ? " h-[27rem] sm:h-96 mt-8" : "h-0 mt-0"}  overflow-hidden transition-all duration-500`}>
              <div className='p-8  space-y-6 border border-mainBorder  rounded-lg '>
                <p className=' text-xs sm:text-sm  text-mainGray'>اگه قبلا ثبت کردی و از ما خرید داشتی اطلاعاتت رو وارد کن ولی اگه اولین باره که از ما خرید میکنی اطلاعاتت رو داخل جزییات صورتحساب وارد کن</p>
                <div className="flex flex-col relative">
                  <input type="text" id="email"
                    className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="ایمیل" autocomplete="off" />
                  <span className='absolute left-4 top-3 text-main'>
                    <MdEmail className=' text-2xl' />
                  </span>
                </div>
                <div className="flex flex-col relative">
                  <input type="text" id="email"
                    className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="رمز عبور" autocomplete="off" />
                  <span className='absolute left-4 top-3 text-main'>
                    <FaKey className=' text-2xl' />
                  </span>
                </div>
                <div className=' flex items-center justify-between'>
                  <div class=" flex items-center text-sm  gap-1">
                    <input class=" cursor-pointer" type="checkbox" name="checkbox" id='remeberme' />
                    <label class=" text-mainGray cursor-pointer" for="remeberme"><span>
                      
                      منو فراموش نکن
                      </span></label>
                  </div>
                  <span className=' text-sm'>فراموشی رمز عبور</span>
                </div>
                <div className=' flex justify-end'>
                  <Btn text="ورود" style="text-white" />

                </div>
              </div>
            </div>

          </div>
          <div className=' col-span-12 lg:col-span-6'>
            <div className=' bg-[#f4f5f9] flex items-center cursor-pointer gap-0.5 vsm:gap-2 py-4 px-2 vsm:p-4 lg:mb-8 rounded-lg '
              onClick={() => {
                setIsApplyCodeBoxOpen(prevState => !prevState)
              }}>
              < FaGem className=' text-main mb-1 ml-0.5 vsm:ml-0' />
              <span className='text-[#8e8e90] text-xs sm:text-base tracking-tighter vsm:tracking-normal '>کد تخفیف داری؟</span>
              <span className=' text-main text-xs sm:text-sm'>برای وارد کردن کد اینجا رو کلیک کن</span>
            </div>


            <div className={` ${isIsApplyCodeBoxOpen ? " h-72 sm:h-60 mt-8" : "h-0 mt-0 "} overflow-hidden transition-all duration-500`}>
              <div className='p-8  space-y-6 border border-mainBorder  rounded-lg '>
                <p className=' text-xs sm:text-sm  text-mainGray'>اگه کد تخفیف داری تو قسمت زیر وارد کن تا اعمال بشه</p>
                <div className="flex flex-col relative">
                  <input type="text" id="email"
                    className="border-none outline-none text-md  h-12 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="کد تخفیف" autocomplete="off" />
                  <span className='absolute left-4 top-3 text-main'>
                    <FaGem className=' text-2xl' />
                  </span>
                </div>
                <div className=' flex justify-end'>
                  <Btn text="اعمال کردن" style="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className=' text-main mb-16'>جزئیات صورتحساب :</h4>
        <div className=' grid grid-cols-12 gap-y-16 xl:gap-6 mb-36'>
          <div className=' col-span-12 xl:col-span-8'>
            <div className=' grid grid-cols-12 gap-6'>
              <div className=' col-span-12 sm:col-span-6'>
                <div className="flex flex-col relative">
                  <input type="text" id="Name"
                    className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="نام و نام خانوادگی" autocomplete="off" />
                  <span className='absolute left-4 top-5 text-main'>
                    <FaUser className=' text-2xl' />
                  </span>
                </div>
              </div>
              <div className=' col-span-12 sm:col-span-6'>
                <div className="flex flex-col relative">
                  <input type="text" id="email"
                    className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="ایمیل" autocomplete="off" />
                  <span className='absolute left-4 top-5 text-main'>
                    <MdEmail className=' text-2xl' />
                  </span>
                </div>
              </div>
              <div className=' col-span-12 sm:col-span-6'>
                <div className="flex flex-col relative">
                  <input type="text" id="phone"
                    className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="شماره همراه" autocomplete="off" />
                  <span className='absolute left-4 top-5 text-main'>
                    <FaPhone className=' text-2xl' />
                  </span>
                </div>
              </div>
              <div className=' col-span-12 sm:col-span-6'>
                <div className="flex flex-col relative">
                  <input type="text" id="phone"
                    className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="استان" autocomplete="off" />
                  <span className='absolute left-4 top-5 text-main'>
                    <MdLocationOn className=' text-2xl' />
                  </span>
                </div>
              </div>
              <div className=' col-span-12 sm:col-span-6'>
                <div className="flex flex-col relative">
                  <input type="text" id="phone"
                    className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="شهر" autocomplete="off" />
                  <span className='absolute left-4 top-5 text-main'>
                    <MdLocationOn className=' text-2xl' />
                  </span>
                </div>
              </div>
              <div className=' col-span-12 sm:col-span-6'>
                <div className="flex flex-col relative">
                  <input type="text" id="phone"
                    className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="کد پستی" autocomplete="off" />
                  <span className='absolute left-4 top-5 text-main'>
                    <MdOutlinePostAdd className=' text-2xl' />
                  </span>
                </div>
              </div>
              <div className=' col-span-12'>
                <div className="flex flex-col relative">
                  <input type="text" id="phone"
                    className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="آدرس دقیق" autocomplete="off" />
                  <span className='absolute left-4 top-5 text-main'>
                    <MdLocationOn className=' text-2xl' />
                  </span>
                </div>
              </div>
              <div className=' col-span-12'>
                <div className="flex flex-col relative">
                  <textarea id="phone"
                    className="border-none outline-none text-md min-h-32 max-h-40 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="اطلاعات بیشتر" autocomplete="off" />
                </div>
              </div>
            </div>
            <div class=" mt-6">
              <div class=" flex items-center gap-1 mb-6">
                <input class=" cursor-pointer" type="checkbox" name="checkbox" id='createAccount' onChange={() => {
                  setIsUserWantToCreateAccount(prevState => !prevState)
                }} />
                <label class=" text-mainGray cursor-pointer" for="createAccount"><span>میخوای اکانت بسازی؟</span></label>
              </div>
              <div className='h-16'>
                <div className={`flex ${isUserWantToCreateAccount ? 'h-full' : 'h-0'} transition-all duration-500 overflow-hidden flex-col relative`}>
                  <input type="text" id="email"
                    className="border-none outline-none text-md  h-full w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                    placeholder="رمز عبور" autocomplete="off" />
                  <span className='absolute left-4 top-5 text-main'>
                    <MdEmail className=' text-2xl' />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=' col-span-12 xl:col-span-4'>
            <CartSummery text="ثبت سفارش" />
          </div>
        </div>
      </section>
    </>
  )
}
