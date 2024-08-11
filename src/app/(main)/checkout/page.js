import React from 'react'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import CartSummery from '@/components/modules/CartSummery.js/CartSummery'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import Login from '@/components/templates/Checkout/Login/Login';
import DiscountCode from '@/components/templates/Checkout/DiscountCode/DiscountCode';
import CreateAccount from '@/components/templates/Checkout/CreateAccount';
export default function checkout() {

  return (
    <>
      <Breadcrumbs destination="صورت حساب" />
      <section className=' container mt-8'>

        <div className=' grid grid-cols-12 gap-6 my-16 border-b-[3px] border-mainBorder pb-8'>
          <Login />
          <DiscountCode />
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
            <CreateAccount/>
          </div>
          <div className=' col-span-12 xl:col-span-4'>
            <CartSummery text="ثبت سفارش" />
          </div>
        </div>
      </section>
    </>
  )
}
