"use client";

import React from 'react'
import CommentCart from './CommentCart/CommentCart'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Comments() {
    return (
        <section className=' bg-mainBg py-6 my-20'>
            <div className=' container '>
                <div class=" mb-10 text-center">
                    <h6 className=' uppercase font-normal'>رضایت مندی کاربران</h6>
                    <h4 className=' font-morabba text-3xl mt-2'>مشتری ها درباره ما <span className=' text-main'>چی میگن !</span></h4>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <CommentCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CommentCart/>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </section>
    )
}
