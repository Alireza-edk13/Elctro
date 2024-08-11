import ProductBox from '@/components/modules/ProductBox/ProductBox'
import TopSectionTitle from '@/components/modules/TopSectionTitle/TopSectionTitle'
import React from 'react'

export default function RelatedProducts() {
    return (
        <>
            <TopSectionTitle title="محصولات مشابه" />

            <div className=' grid sm:grid-cols-2   md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6'>
                <ProductBox isProductBoxForRelatedProduct={true} pic="product-11" />
                <ProductBox isProductBoxForRelatedProduct={true} pic="product-2" />
                <ProductBox isProductBoxForRelatedProduct={true} pic="product-8" />
                <ProductBox isProductBoxForRelatedProduct={true} pic="product-5" />
                <ProductBox isProductBoxForRelatedProduct={true} pic="product-2" />
            </div>

        </>
    )
}
