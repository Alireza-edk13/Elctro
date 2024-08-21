"use client"
import Button from '@/components/modules/Button/Button';
import DeleteModal from '@/components/modules/DeleteModal/DeleteModal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { GrUserAdmin } from "react-icons/gr";
export default function CategoryTable({ categories }) {


    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)


    const [categoryId, setCategoryId] = useState(null)
    const [mainCategoryInfo, setMainCategoryInfo] = useState({})

    // const [removeUser, { isLoading }] = useRemoveUserMutation();
    // const router = useRouter();

    // const removeUserHandler = async (id) => {
    //     try {
    //         const result = await removeUser({ id }).unwrap();
    //         console.log(result);
    //         toast.success(result.message)
    //         router.refresh()
    //         setIsShowDeleteModal(false)

    //     } catch (err) {
    //         console.error(err);
    //         toast.error('خطای سمت سرور !')
    //         setIsShowDeleteModal(false)
    //     }
    // }

    return (
        <>
            <table className="w-full mt-10 text-gray-500 overflow-auto">
                <thead className="border-b child:whitespace-nowrap">
                    <tr className='child:text-right child:p-4 text-gray-600'>
                        <th>عنوان دسته بندی</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 child:whitespace-nowrap'>
                    {categories?.map((category, index) => (
                        <tr key={category._id} className=' child:p-4'>
                            <td>
                                <div>
                                    <Link href="#" className="text-gray-600 font-bolder">{category.title}</Link>
                                </div>
                            </td>
                            <td >
                                <div onClick={() => {
                                    setIsShowEditModal(true)
                                    setMainCategoryInfo(category)
                                    setCategoryId(category._id)
                                }} className=' inline-block'>
                                    <Button isIconNeed={false} style="w-[100px] bg-main" text="ویرایش" />
                                </div>
                            </td>
                            <td >
                                <div onClick={() => {
                                    setIsShowDeleteModal(true)
                                    setCategoryId(category._id)
                                }} className=" inline-block">
                                    <Button isIconNeed={false} style="w-[100px] bg-red-500" text="حدف" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* delete modal */}
            {isShowDeleteModal &&
                <DeleteModal onClose={() => setIsShowDeleteModal(false)} onSubmit={() => {
                    removeCategoryHandler(categoryId)
                }} title="دسته بندی حذف شود ؟" />
            }
        </>
    )
}
