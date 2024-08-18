import React from 'react'
import Btn from '@/components/modules/Btn/Btn'

export default function RecentUsers() {
    return (
        <div className=' col-span-12 overflow-auto xl:col-span-5 bg-mainWhite border rounded-lg shadow'>
            <div className="flex justify-between items-center px-4 py-2 mb-2 border-b-2 ">
                <h3 className='tracking-wider font-morabba'>آخرین ثبت نامی ها</h3>
                <Btn href='users' style=' text-xs w-[100px] h-[30px]' text='دیدن همه' />
            </div>
            <div className="px-4">
                <table className='table-fixed min-w-full divide-y divide-gray-200'>
                    <thead>
                        <tr>
                          
                            <th scope="col" className="py-3 text-right text-xs font-medium  uppercase tracking-wider">اسم</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium  uppercase tracking-wider"> ایمیل</th>
                            <th scope="col" className="py-3 text-right text-xs font-medium  uppercase tracking-wider"> شماره همراه</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-xs ">
                        <tr>
                            <td className="py-4 whitespace-nowrap text-xs ">علیرضا موسوی</td>
                            <td className="py-4 whitespace-nowrap text-xs ">alireza@gmail.com</td>
                            <td className="py-4 whitespace-nowrap text-xs  ">091345690089</td>
                        </tr>
                        <tr>
                            <td className="py-4 whitespace-nowrap text-xs ">علیرضا موسوی</td>
                            <td className="py-4 whitespace-nowrap text-xs ">alireza@gmail.com</td>
                            <td className="py-4 whitespace-nowrap text-xs  ">091345690089</td>
                        </tr>
                        <tr>
                            <td className="py-4 whitespace-nowrap text-xs ">علیرضا موسوی</td>
                            <td className="py-4 whitespace-nowrap text-xs ">alireza@gmail.com</td>
                            <td className="py-4 whitespace-nowrap text-xs  ">091345690089</td>
                        </tr>
                        <tr>
                            <td className="py-4 whitespace-nowrap text-xs ">علیرضا موسوی</td>
                            <td className="py-4 whitespace-nowrap text-xs ">alireza@gmail.com</td>
                            <td className="py-4 whitespace-nowrap text-xs  ">091345690089</td>
                        </tr>
                        <tr>
                            <td className="py-4 whitespace-nowrap text-xs ">علیرضا موسوی</td>
                            <td className="py-4 whitespace-nowrap text-xs ">alireza@gmail.com</td>
                            <td className="py-4 whitespace-nowrap text-xs  ">091345690089</td>
                        </tr>
                        

                    </tbody>
                </table>
            </div>
        </div>
    )
}
