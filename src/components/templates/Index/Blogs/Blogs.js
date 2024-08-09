import React from 'react'

import BlogCart from './BlogCart/BlogCart';
export default function Blogs() {
    return (
        <section className='py-6 my-20'>
            <div className=' container '>
                <div class=" mb-10 text-center">
                    <h6 className=' uppercase'>مقاله های ما</h6>
                    <h4 className=' font-morabba font-semibold text-3xl mt-2'>آخرین اخبار و<span className=' text-main'> مقالات </span>منتشر شده</h4>
                </div>
                <div className=' grid grid-cols-3 gap-10'>
                    <BlogCart pic ="Blog1" title="بهترین گوشی ها بازار از  سامسونگ تا اپل"/>
                    <BlogCart pic ="Blog2" title=" دوربین چی بخرم؟ مروری بر بهترین برند ها"/>
                    <BlogCart pic ="Blog3" title=" عمر مفید لب تاپ ها چقدره؟"/>
                </div>
            </div>
        </section>
    )
}
