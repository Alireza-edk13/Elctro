"use client";
import React, { useState } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoTicket } from 'react-icons/io5';
import { ImExit } from "react-icons/im";
import Link from 'next/link';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '@/redux/slice/sideBarUserPanelSlice';
import { HiHeart } from 'react-icons/hi2';

export default function SideBar() {

    const isSideBarOpen = useSelector((store) => store.sideBarUserPanelSlice.isSideBarOpen)

    const dispatch = useDispatch();


    return (
        <>
            <div className={`${isSideBarOpen ? '' : ' hidden'} fixed inset-0 bg-mainBlack z-30 h-screen opacity-[0.2] 2xl:hidden`} onClick={() => dispatch(closeSideBar())} ></div>
            <aside className={`${isSideBarOpen ? 'mobile-nav--active' : ''} fixed  z-30 w-48  2xl:w-60 top-0 right-0  h-screen pt-[4.5rem]  bg-main translate-x-[100%] 2xl:translate-x-0 2xl:visible 2xl:opacity-100 mobile-nav-transition border-l-4 border-mainBlack invisible`}>
                <div className='overflow-y-auto py-3 px-3 h-full'>
                    <ul className=' space-y-4 child:cursor-pointer'>
                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/user-panel'} className='flex items-center text-md gap-2 p-2 text-white rounded-lg'>
                                <IoHomeSharp className=' text-2xl text-white' />
                                صفحه اصلی
                            </Link>
                        </li>
                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/user-panel/fav'} className='flex items-center text-md gap-2 p-2 text-white rounded-lg'>
                                <HiHeart className=' text-2xl text-white' />
                                علاقه مندی ها
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/user-panel/orders'} className='flex items-center text-md gap-2 p-2 text-white rounded-lg'>
                                <FaCartShopping className=' text-2xl text-white' />
                                سفارشات
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <Link href={'/user-panel/tickets'} className='flex items-center text-md gap-2 p-2 text-white rounded-lg'>
                                <IoTicket className=' text-2xl text-white' />
                                تیکت
                            </Link>
                        </li>

                        <li onClick={() => dispatch(closeSideBar())}>
                            <div className='flex cursor-pointer items-center text-md gap-2 p-2 rounded-lg text-white'>
                                <ImExit className=' text-2xl rotate-180 text-white' />
                                خروج
                            </div>
                        </li>


                    </ul>
                </div>
            </aside>
        </>
    )
}
