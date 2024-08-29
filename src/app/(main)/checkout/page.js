import React from 'react'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import Login from '@/components/templates/Checkout/Login/Login';
import DiscountCode from '@/components/templates/Checkout/DiscountCode/DiscountCode';
import { RiLoginBoxLine } from "react-icons/ri";
import Btn from '@/components/modules/Btn/Btn';
import OrderFormSection from '@/components/templates/Checkout/OrderFormSection/OrderFormSection';
import { authUser } from '@/app/api/utils/serverHelpers';
export default async function checkout() {


  const user = await authUser()


  return (
    <>
      <Breadcrumbs destination="صورت حساب" />
      <section className=' container mt-8'>
        <div className=' grid grid-cols-12 gap-6 my-16 border-b-[3px] border-mainBorder pb-8'>
          <Login />
          <DiscountCode />
        </div>
        <h4 className=' text-main mb-16'>جزئیات صورتحساب :</h4>
        {
          !user ?
            <div className=' flex-center flex-col gap-6 mb-52'>
              <RiLoginBoxLine className=' text-9xl sm:text-[12rem] text-main' />
              <p className=' text-sm sm:text-lg'>برای ثبت سفارش ابتدا باید وارد حساب خود شود</p>
              <Btn text="ورود / ثبت نام" href="/login" />
            </div>
            : <OrderFormSection user={JSON.parse(JSON.stringify(user))} />
        }

      </section>
    </>
  )
}
