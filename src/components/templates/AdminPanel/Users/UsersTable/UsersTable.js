"use client"
import Button from '@/components/modules/Button/Button';
import Link from 'next/link';
import React from 'react'
import { FaUser } from 'react-icons/fa';

export default function UsersTable({ users }) {
    console.log(users);

    return (
        <table className="w-full mt-10 text-gray-500 overflow-auto">
            <thead className="border-b child:whitespace-nowrap">
                <tr className='child:text-right child:p-4 text-gray-600'>
                    <th>مرتبه</th>
                    <th>نقش</th>
                    <th>کاربر</th>
                    <th>ایمیل</th>
                    <th>شماره همراه</th>

                </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                {users?.map((user, index) => (
                    <tr key={user._id} className=' child:p-4'>
                        <td className='text-center'>{index + 1}</td>
                        <td>
                            <div className="text-lg flex-center text-white py-2 px-1 rounded-full bg-main">
                                <FaUser />
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link href="#" className="text-gray-600 font-bolder">{user.name}</Link>
                            </div>
                        </td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td >
                            <div onClick={() => {
                                setIsShowChangeRoleModal(true)
                                setUserId(user._id)
                            }} className=" inline-block">
                                <Button isIconNeed={false} style="w-[100px] bg-main" text='تغیر نقش' />
                            </div>
                        </td>
                        <td >
                            <div onClick={() => {
                                setIsShowEditModal(true)
                                setMainUserInfo(user)
                                setUserId(user._id)
                            }} className=' inline-block'>
                                <Button isIconNeed={false} style="w-[100px] bg-main" text="ویرایش" />
                            </div>
                        </td>
                        <td >
                            <div onClick={() => {
                                setIsShowBanModal(true)
                                setUserId(user._id)
                            }} className=" inline-block">
                                <Button isIconNeed={false} style="w-[100px] bg-red-500" text="بن کاربر" />
                            </div>
                        </td>
                        <td >
                            <div onClick={() => {
                                setIsShowDeleteModal(true)
                                setUserId(user._id)
                            }} className=" inline-block">
                                <Button isIconNeed={false} style="w-[100px] bg-red-500" text="حذف کاربر" />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
