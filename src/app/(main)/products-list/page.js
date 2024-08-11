import React from 'react'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import ProductBox from '@/components/modules/ProductBox/ProductBox'
import { MdNavigateNext } from 'react-icons/md'
import NewProduct from '@/components/templates/ProductList/NewProduct/NewProduct'


export default function page() {
    return (
        <>
            <Breadcrumbs destination="لیست محصولات" />
            <section className=' container mt-8'>
                <div className=' grid grid-cols-12 gap-6'>
                    <div className=' col-span-12 lg:col-span-9'>
                        <div className=' flex justify-between items-center my-8'>
                            <span className='text-sm'><span className=' ml-1 text-main'>12</span>محصول یافت شد</span>
                            <div className='text-sm flex-center gap-2'>
                                <span>دسته بندی بر اساس :</span>
                                <div className=' bg-main p-3  rounded-lg text-white flex-center gap-1'>
                                    <span>پرفروش ترین </span>
                                    <MdNavigateNext className=' text-xl rotate-90' />
                                </div>
                            </div>
                        </div>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6'>
                            <ProductBox isProductBoxForProductsList={true} pic="product-1" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-9" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-5" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-6" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-2" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-7" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-8" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-10" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-3" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-11" />
                            <ProductBox isProductBoxForProductsList={true} pic="product-4" />
                        </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-3'>
                        <div className=' bg-mainBg rounded-lg p-10 mt-[6.8rem]'>
                            <h5 className=' font-semibold border-b pb-4 border-mainBorder mb-8'>دسته بندی ها</h5>
                            <ul className=' space-y-4'>
                                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                                    <span>هدفون</span>
                                    <span className=' text-mainGray'>(125)</span>
                                </li>
                                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                                    <span>لب تاب</span>
                                    <span className=' text-mainGray'>(125)</span>
                                </li>
                                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                                    <span>کامپیوتر</span>
                                    <span className=' text-mainGray'>(125)</span>
                                </li>
                                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                                    <span>موبایل</span>
                                    <span className=' text-mainGray'>(125)</span>
                                </li>
                                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                                    <span>لوازم جانبی</span>
                                    <span className=' text-mainGray'>(125)</span>
                                </li>
                                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                                    <span>گیمینگ</span>
                                    <span className=' text-mainGray'>(125)</span>
                                </li>
                                <li className=' flex justify-between border-mainBorder items-center text-main text-sm'>
                                    <span>دسته بازی</span>
                                    <span className=' text-mainGray'>(125)</span>
                                </li>

                            </ul>
                        </div>
                        <NewProduct />
                        <div className=' bg-mainBg rounded-lg p-10'>
                            <h5 className=' font-semibold border-b pb-4 border-mainBorder mb-8'>برند ها</h5>
                            <ul className=' space-y-4'>
                                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                                    <span>سامسونگ</span>
                                    <span className=' text-mainGray'>(12)</span>
                                </li>
                                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                                    <span>اپل</span>
                                    <span className=' text-mainGray'>(15)</span>
                                </li>
                                <li className=' flex justify-between border-b pb-4 border-mainBorder items-center text-main text-sm'>
                                    <span>هوآوی</span>
                                    <span className=' text-mainGray'>(05)</span>
                                </li>
                                
                                <li className=' flex justify-between border-mainBorder items-center text-main text-sm'>
                                    <span>ال جی</span>
                                    <span className=' text-mainGray'>(21)</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
