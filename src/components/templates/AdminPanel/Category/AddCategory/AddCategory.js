"use client";
import React, { useState } from 'react'
import Button from '@/components/modules/Button/Button'
import { useFormik } from 'formik';
import categoryValidator from '@/validators/category';
import { useAddCategoryMutation } from '@/redux/api/categoryApi';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Modal from '@/components/modules/Modal/Modal';

export default function AddCategory() {

    const [isShowAddModal, setIsShowAddModal] = useState(false)

    const [addCategory, { isLoading }] = useAddCategoryMutation();
    const router = useRouter();

    const addCategoryHandler = async (title) => {
        try {
            const result = await addCategory(title).unwrap();
            if (!isLoading) {
                toast.success(result.message)
                router.refresh()
                setIsShowAddModal(false)
                addForm.setValues({title: ""})
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.data?.message)
            setIsShowAddModal(false)
        }
    }


    const addForm = useFormik({
        initialValues: { title: "" },

        onSubmit: (values) => {
            addCategoryHandler(values)
            setIsShowAddModal(false)
        },

        validationSchema: categoryValidator,
    });


    return (

        <>
            <div onClick={() => setIsShowAddModal(true)}>
                <Button style=' w-[160px] bg-green-500' text="اضافه کردن دسته بندی +" isIconNeed={false} />
            </div>
            {
                isShowAddModal && <Modal title="اضافه کردن دست بندی" onClose={() => setIsShowAddModal(false)}>
                    <form onSubmit={addForm.handleSubmit} className=' p-6'>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">عنوان</label>
                                <input type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-2.5" placeholder="عنوان"
                                    value={addForm.values.title}
                                    onChange={addForm.handleChange}
                                    onBlur={addForm.handleBlur}
                                />
                                {
                                    addForm.errors.title && addForm.touched.title && <label htmlFor="title" className='text-red-500 text-[13px] block mt-2 ml-1'>{addForm.errors.title}</label>
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
