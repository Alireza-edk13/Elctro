"use client";
import React from 'react'
import TopSectionTitle from '@/components/modules/TopSectionTitle/TopSectionTitle'
import ProductBox from '@/components/modules/ProductBox/ProductBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function TrendingProducts() {
    return (
        <section className=' bg-mainBg mt-20 py-6'>
            <div className=' container'>
                <TopSectionTitle title="Trending items" />
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1400: {
                                slidesPerView: 5,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <ProductBox pic="product-1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox pic="product-2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox pic="product-3" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox pic="product-4" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox pic="product-5" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox pic="product-6" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox pic="product-7" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductBox pic="product-8" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
