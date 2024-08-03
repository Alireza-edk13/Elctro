import React from 'react'
import Link from 'next/link'

export default function Menu() {
    return (
        <div className='hidden lg:flex-center  gap-16'>
            <ul className='flex-center child:cursor-pointer gap-10'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='relative group'>
                    <div>Course</div>
                    <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-24px] top-[80%] pt-7 transition-all ease duration-300  z-20`}>
                        <div className='flex flex-col text-left  child:rounded-md capitalize child:transition-all text-mainBlack font-medium shadow-custom child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-lg bg-white'>
                            <Link href={'/course-list'} className='dropdown'>Courses List</Link>
                            <Link href={'/course-detail/ai-course'} className='dropdown'>Course Details</Link>
                        </div>

                    </div>
                </li>
                <li className='relative group'>
                    <div>BLog</div>
                    <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-24px] top-[80%] pt-7 transition-all ease duration-300  z-20`}>
                        <div className='flex flex-col text-left  child:rounded-md capitalize child:transition-all text-mainBlack font-medium child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-lg bg-white shadow-custom'>
                            <Link href={'/blog-list'} className='dropdown'>Blog List</Link>
                            <Link href={'/blog-detail'} className='dropdown'>Blog Details</Link>
                        </div>

                    </div>
                </li>
                <li className='relative group'>
                    <div>Pages</div>
                    <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-24px] top-[80%] pt-7 transition-all ease duration-300  z-20`}>
                        <div className='flex flex-col text-left  child:rounded-md capitalize child:transition-all child-hover:text-white  child-hover:bg-main bg-main-black child:w-[13rem] py-4 px-2 child:py-2 child:px-4 rounded-lg bg-white text-mainBlack font-medium shadow-custom '>
                            <Link href={'/teacher-list'} className='dropdown'>Teachers List</Link>
                            <Link href={'/teacher-detail'} className='dropdown'>Teacher Details</Link>
                            <Link href={'/login'} className='dropdown'>Login</Link>
                            <Link href={'/register'} className='dropdown'>Register</Link>
                        </div>
                    </div>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}
