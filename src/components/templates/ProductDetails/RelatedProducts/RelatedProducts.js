import ProductBox from '@/components/modules/ProductBox/ProductBox'
import TopSectionTitle from '@/components/modules/TopSectionTitle/TopSectionTitle'
import React from 'react'

export default function RelatedProducts({products}) {
    return (
        <>
            <TopSectionTitle title="محصولات مشابه" />

            <div className=' grid sm:grid-cols-2   md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6'>
                {products.map((product) => (
                    <ProductBox key={product._id} {...product} isProductBoxForRelatedProduct = {true} />
                ))}
            </div>

        </>
    )
}
