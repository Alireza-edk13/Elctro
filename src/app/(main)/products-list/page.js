import React from 'react'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import ProductBox from '@/components/modules/ProductBox/ProductBox'
import { MdNavigateNext } from 'react-icons/md'
import NewProduct from '@/components/templates/ProductsList/NewProduct/NewProduct'
import Category from '@/components/templates/ProductsList/Category/Category'
import Brands from '@/components/templates/ProductsList/Brands/Brands'


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
                        <Category />
                        <NewProduct />
                        <Brands />
                    </div>
                </div>
            </section>
        </>
    )
}
