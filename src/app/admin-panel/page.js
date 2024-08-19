import React from 'react'
import InfoBox from '@/components/templates/AdminPanel/InfoBox/InfoBox'
import SimpleLineChart from '@/components/templates/AdminPanel/Chart/SimpleLineChart/SimpleLineChart'
import PieChartBox from '@/components/templates/AdminPanel/Chart/PieChartBox/PieChartBox'
import RecentUsers from '@/components/templates/AdminPanel/RecentUsers/RecentUsers'
import RecentProduct from '@/components/templates/AdminPanel/RecentProduct/RecentProduct'
import Link from 'next/link'

export default function page() {
  return (
    <>
      <h4 className=' font-morabba text-main text-2xl'>علیرضا خوش اومدی !</h4>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <InfoBox title="بازدید سایت" count={5230} />
        <InfoBox title="ثبت نامی‌ها" count={1230} />
        <InfoBox title="سفارشات" count={230} />
        <InfoBox title="مقالات" count={20} />
      </div>
      <div className=' grid grid-cols-12'>
        <div className=' md:col-span-12 xl:col-span-4'>
          <PieChartBox />
        </div>
        <div className=' col-span-12 xl:col-span-8'>
          <SimpleLineChart />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <RecentUsers />
        <RecentProduct />
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
