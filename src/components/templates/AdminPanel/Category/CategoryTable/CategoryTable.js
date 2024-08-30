"use client"
import Button from '@/components/modules/Button/Button';
import DeleteModal from '@/components/modules/DeleteModal/DeleteModal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useDeleteCategoryMutation, useEditCategoryMutation } from '@/redux/api/categoryApi';
import { useFormik } from 'formik';
import categoryValidator from '@/validators/category';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Modal from '@/components/modules/Modal/Modal';
export default function CategoryTable({ categories }) {


    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)


    const [categoryId, setCategoryId] = useState(null)
    const [mainCategoryInfo, setMainCategoryInfo] = useState({})

    const [deleteCategory] = useDeleteCategoryMutation();
    const [editCategory, { isLoading }] = useEditCategoryMutation();
    const router = useRouter();

    const deleteCategoryHandler = async (id) => {
        try {
            const result = await deleteCategory({ id }).unwrap();
            toast.success(result.message)
            router.refresh()
            setIsShowDeleteModal(false)

        } catch (err) {
            console.error(err);
            toast.error(err?.data?.message)
            setIsShowDeleteModal(false)
        }
    }
    const editCategoryHandler = async ({title}) => {
        try {
            const result = await editCategory({id: categoryId , title}).unwrap();
            if (!isLoading) {
                toast.success(result.message)
                router.refresh()
                setIsShowEditModal(false)
                editForm.setValues({ title: "" })
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.data?.message)
            setIsShowEditModal(false)
        }
    }

    const editForm = useFormik({
        initialValues: { title: "" },


        onSubmit: (values) => {
            editCategoryHandler(values)
            setIsShowEditModal(false)
        },

        validationSchema: categoryValidator,
    });

    useEffect(() => {
        if (isShowEditModal) {
            editForm.setValues({
                title: mainCategoryInfo.title || "",
            });
        }
    }, [isShowEditModal, mainCategoryInfo]);

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
                    deleteCategoryHandler(categoryId)
                }} title="دسته بندی حذف شود ؟" />
            }

            {/* edit modal */}

            {
                isShowEditModal && <Modal title="ویرایش دسته بندی" onClose={() => setIsShowEditModal(false)}>
                    <form onSubmit={editForm.handleSubmit} className=' p-6'>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">عنوان</label>
                                <input type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="عنوان جدید"
                                    value={editForm.values.title}
                                    onChange={editForm.handleChange}
                                    onBlur={editForm.handleBlur}
                                />
                                {
                                    editForm.errors.title && editForm.touched.title && <label htmlFor="title" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.title}</label>
                                }
                            </div>
                        </div>
                        <button type="submit" className=' w-full mt-8' disabled={isLoading}  >
                            <div className={` btn w-full before:w-full ${isLoading && "bg-mainBlack"} text-white`}>
                                <span className=' text-sm '>
                                    {isLoading ? "لطفا منتظر بمانید ..." : "اضافه کردن"}
                                </span>
                                {
                                    !isLoading &&
                                    <IoIosArrowRoundForward className=' text-2xl rotate-180' />
                                }
                            </div>
                        </button>
                    </form>
                </Modal>
            }
        </>
    )
}
