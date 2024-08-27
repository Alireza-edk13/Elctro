"use client"
import { useGetMeUserQuery } from '@/redux/api/authApi';
import { useUpdateUserInfoMutation } from '@/redux/api/userPanelApi';
import { updateUserValidator } from '@/validators/user';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { toast } from 'react-toastify';

export default function page() {


    const [updateUserInfo, updateUserInfoResponse] = useUpdateUserInfoMutation();
    const { data, refetch, isLoading } = useGetMeUserQuery()

    const router = useRouter()

    const updateUserInfoHandler = async (info) => {
        try {
            const result = await updateUserInfo(info).unwrap();
            console.log(result);
            if (!updateUserInfoResponse.isLoading) {
                toast.success(result.message)
                refetch()
                router.refresh()
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.data?.message)
        }
    }




    const editForm = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            province: "",
            city: "",
            address: "",
            postalCode: "",

        },
        enableReinitialize: true,
        validationSchema: updateUserValidator,
        onSubmit: (values) => {
            updateUserInfoHandler(values)
        }
    });

    useEffect(() => {
        refetch()
        if (data) {
            editForm.setValues({
                name: data?.name || "",
                email: data?.email || "",
                phone: data?.phone || "",
                province: data?.province || "",
                city: data?.city || "",
                address: data?.address || "",
                postalCode: data?.postalCode || "",
            });
        }
    }, [data]);

    if (isLoading) {
        return <div className='mt-28 px-4 sm:px-8 h-screen'>
            <h3 className="text-lg sm:text-xl">در حال برگزاری اطلاعات . . .</h3>
        </div>
    }


    return (
        <>
            <form onSubmit={editForm.handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">نام و نام خانوادگی</label>
                        <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4"
                            value={editForm.values.name}
                            onChange={editForm.handleChange}
                            onBlur={editForm.handleBlur}
                        />
                        {
                            editForm.errors.name && editForm.touched.name && <label htmlFor="name" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.name}</label>
                        }
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">ایمیل</label>
                        <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4"
                            value={editForm.values.email}
                            onChange={editForm.handleChange}
                            onBlur={editForm.handleBlur}
                        />
                        {
                            editForm.errors.email && editForm.touched.email && <label htmlFor="email" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.email}</label>
                        }
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-900 block mb-2">شماره همراه</label>
                        <input type="text" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4"
                            name='phone'
                            value={editForm.values.phone}
                            onChange={editForm.handleChange}
                            onBlur={editForm.handleBlur}
                        />

                        {
                            editForm.errors.phone && editForm.touched.phone && <label htmlFor="phone" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.phone}</label>
                        }
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="postalCode" className="text-sm font-medium text-gray-900 block mb-2">کد پستی</label>
                        <input type="text" id="postalCode" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4"
                            name='postalCode'
                            value={editForm.values.postalCode}
                            onChange={editForm.handleChange}
                            onBlur={editForm.handleBlur}
                        />

                        {
                            editForm.errors.postalCode && editForm.touched.postalCode && <label htmlFor="postalCode" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.postalCode}</label>
                        }
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="province" className="text-sm font-medium text-gray-900 block mb-2">استان</label>
                        <input type="text" id="province" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4"
                            name='province'
                            value={editForm.values.province}
                            onChange={editForm.handleChange}
                            onBlur={editForm.handleBlur}
                        />

                        {
                            editForm.errors.province && editForm.touched.province && <label htmlFor="province" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.province}</label>
                        }
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="city" className="text-sm font-medium text-gray-900 block mb-2">شهر</label>
                        <input type="text" id="city" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4"
                            name='city'
                            value={editForm.values.city}
                            onChange={editForm.handleChange}
                            onBlur={editForm.handleBlur}
                        />

                        {
                            editForm.errors.city && editForm.touched.city && <label htmlFor="city" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.city}</label>
                        }
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="address" className="text-sm font-medium text-gray-900 block mb-2">آدرس</label>
                        <input type="text" id="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-main block w-full p-4"
                            name='address'
                            value={editForm.values.address}
                            onChange={editForm.handleChange}
                            onBlur={editForm.handleBlur}
                        />

                        {
                            editForm.errors.address && editForm.touched.address && <label htmlFor="address" className='text-red-500 text-[13px] block mt-2 ml-1'>{editForm.errors.address}</label>
                        }
                    </div>

                    <div className=' col-span-6 justify-start text-end'>
                        <button type="submit" className=' w-[200px] mt-8' disabled={updateUserInfoResponse.isLoading}  >
                            <div className={` btn w-full before:w-full ${updateUserInfoResponse.isLoading && "bg-mainBlack"} text-white`}>
                                <span className=' text-sm '>
                                    {updateUserInfoResponse.isLoading ? "لطفا منتظر بمانید ..." : "آپدیت اطلاعات"}
                                </span>
                                {
                                    !updateUserInfoResponse.isLoading &&
                                    <IoIosArrowRoundForward className=' text-2xl rotate-180' />
                                }
                            </div>
                        </button>
                    </div>
                </div>

            </form>
        </>
    )
}
