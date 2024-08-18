import Btn from '@/components/modules/Btn/Btn'
import Link from 'next/link'
import React from 'react'

export default function RecentProduct() {
    return (
        <div className=' col-span-12 overflow-auto xl:col-span-8 bg-mainWhite border rounded-lg shadow'>
            <div className="flex justify-between items-center px-4 py-2 mb-2 border-b-2 ">
                <h3 className='tracking-wider font-morabba'>محصولات اخیر</h3>
                <Btn href='users' style=' text-xs w-[100px] h-[30px]' text='دیدن همه' />
            </div>
            <div className=' px-4'>
                <table className="table-fixed min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className=' child:pr-4'>
                            
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider"> محصول</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider"> قیمت</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider"> برند</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider"> وضعیت</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium uppercase tracking-wider"> مشاهده</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200  text-xs">

                        <tr className=' child:pr-4'>
                            <td className="py-4 whitespace-nowrap  text-xs">هدفون</td>
                            <td className="py-4 whitespace-nowrap  text-xs">139 تومان</td>
                            <td className="py-4 whitespace-nowrap  text-xs">ایسوس</td>
                            <td className="py-4 whitespace-nowrap  text-xs">
                                <span className=
                                    {`px-2 py-1 rounded text-xs text-white  bg-main`}>
                                    موجود
                                </span>
                            </td>
                            <td className="py-4 whitespace-nowrap  text-xs text-main">
                                <Link href={'admin-panel/course-list'}>دیدن همه</Link>
                            </td>
                        </tr>
                        <tr className=' child:pr-4'>
                            <td className="py-4 whitespace-nowrap  text-xs">هدفون</td>
                            <td className="py-4 whitespace-nowrap  text-xs">139 تومان</td>
                            <td className="py-4 whitespace-nowrap  text-xs">ایسوس</td>
                            <td className="py-4 whitespace-nowrap  text-xs">
                                <span className=
                                    {`px-2 py-1 rounded text-xs text-white  bg-main`}>
                                    موجود
                                </span>
                            </td>
                            <td className="py-4 whitespace-nowrap  text-xs text-main">
                                <Link href={'admin-panel/course-list'}>دیدن همه</Link>
                            </td>
                        </tr>
                        <tr className=' child:pr-4'>
                            <td className="py-4 whitespace-nowrap  text-xs">هدفون</td>
                            <td className="py-4 whitespace-nowrap  text-xs">139 تومان</td>
                            <td className="py-4 whitespace-nowrap  text-xs">ایسوس</td>
                            <td className="py-4 whitespace-nowrap  text-xs">
                                <span className=
                                    {`px-2 py-1 rounded text-xs text-white  bg-main`}>
                                    موجود
                                </span>
                            </td>
                            <td className="py-4 whitespace-nowrap  text-xs text-main">
                                <Link href={'admin-panel/course-list'}>دیدن همه</Link>
                            </td>
                        </tr>
                        <tr className=' child:pr-4'>
                            <td className="py-4 whitespace-nowrap  text-xs">هدفون</td>
                            <td className="py-4 whitespace-nowrap  text-xs">139 تومان</td>
                            <td className="py-4 whitespace-nowrap  text-xs">ایسوس</td>
                            <td className="py-4 whitespace-nowrap  text-xs">
                                <span className=
                                    {`px-2 py-1 rounded text-xs text-white  bg-main`}>
                                    موجود
                                </span>
                            </td>
                            <td className="py-4 whitespace-nowrap  text-xs text-main">
                                <Link href={'admin-panel/course-list'}>دیدن همه</Link>
                            </td>
                        </tr>
                        <tr className=' child:pr-4'>
                            <td className="py-4 whitespace-nowrap  text-xs">هدفون</td>
                            <td className="py-4 whitespace-nowrap  text-xs">139 تومان</td>
                            <td className="py-4 whitespace-nowrap  text-xs">ایسوس</td>
                            <td className="py-4 whitespace-nowrap  text-xs">
                                <span className=
                                    {`px-2 py-1 rounded text-xs text-white  bg-main`}>
                                    موجود
                                </span>
                            </td>
                            <td className="py-4 whitespace-nowrap  text-xs text-main">
                                <Link href={'admin-panel/course-list'}>دیدن همه</Link>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}
