import React from 'react'
import InfoBox from '@/components/templates/AdminPanel/InfoBox/InfoBox'
import SimpleLineChart from '@/components/templates/AdminPanel/Chart/SimpleLineChart/SimpleLineChart'
import RecentUsers from '@/components/templates/AdminPanel/RecentUsers/RecentUsers'
import RecentProduct from '@/components/templates/AdminPanel/RecentProduct/RecentProduct'
import Link from 'next/link'
import connectToDB from '@/configs/db'
import UserModel from "@/models/User";
import ProductModel from "@/models/Product";

export default async function page() {

  connectToDB();
  const usersCount = await UserModel.find({})
  const users = await UserModel.find({},
    "phone name email").sort({ _id: -1 }).lean().limit(5);
  const products = await ProductModel
    .find({}, "name brand stock")
    .sort({ _id: -1 }).lean().limit(5);

  return (
    <>
      <h4 className=' font-morabba text-main text-2xl'>علیرضا خوش اومدی !</h4>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <InfoBox title="بازدید سایت" count={5230} />
        <InfoBox title="ثبت نامی‌ها" count={usersCount.length > 10 ? usersCount.length : "0" + usersCount.length} />
        <InfoBox title="سفارشات" count={230} />
        <InfoBox title="مقالات" count={"0" + 3} />
      </div>
      <div className=' grid grid-cols-12'>
        <div className=' col-span-12 xl:col-span-12'>
          <SimpleLineChart />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <RecentUsers users={JSON.parse(JSON.stringify(users))} />
        <RecentProduct products={JSON.parse(JSON.stringify(products))} />
      </div>

      <footer className="flex justify-between rounded-md mt-4 px-8 py-4  border text-xs font-bold ">
        <div className=" flex items-center gap-2 child-hover:text-main transition-all">
          <Link href={'/admin-panel'}>راهنما</Link>
          <Link href={'/admin-panel'}>ایمیل</Link>
          <Link href={'/admin-panel'}>پشتیبانی</Link>
        </div>
        <div>© 1404 الکتروشاپ</div>
      </footer>

    </>
  )
}
