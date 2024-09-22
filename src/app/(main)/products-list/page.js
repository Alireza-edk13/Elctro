import React from 'react'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import ProductBox from '@/components/modules/ProductBox/ProductBox'
import { MdNavigateNext } from 'react-icons/md'
import NewProduct from '@/components/templates/ProductsList/NewProduct/NewProduct'
import Category from '@/components/templates/ProductsList/Category/Category'
import Brands from '@/components/templates/ProductsList/Brands/Brands'
import connectToDB from '@/configs/db'
import ProductModel from "@/models/Product";

export default async function page() {
    connectToDB()
    const products = await ProductModel.find({}).populate("categoryId", "title -_id").lean();

    return (
        <>
            <Breadcrumbs destination="لیست محصولات" />
            <section className=' container mt-8'>
                <div className=' grid grid-cols-12 gap-6'>
                    <div className=' col-span-12 lg:col-span-9'>
                        <div className=' flex justify-between items-center my-8'>
                            <span className='text-sm'><span className=' ml-1 text-main'>{products.length}</span>محصول یافت شد</span>
                            <div className='text-sm flex-center gap-2'>
                                <span className=' hidden sm:block'>دسته بندی بر اساس :</span>
                                <div className=' bg-main p-3 cursor-pointer rounded-lg text-white flex-center gap-1'>
                                    <span>پرفروش ترین </span>
                                    <MdNavigateNext className=' text-xl rotate-90' />
                                </div>
                            </div>
                        </div>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-3 gap-6'>
                            {JSON.parse(JSON.stringify(products)).map((product) => (
                                <ProductBox {...product} isProductBoxForProductsList={true} key={product._id} />
                            ))}

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
