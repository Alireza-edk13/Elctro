import Link from 'next/link'
import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

export default function Breadcrumbs({destination}) {
    return (
        <section className=' bg-mainBg font-semibold text-sm'>
            <div className="container">
                <div className='flex items-center justify-end h-14'>
                    <Link href={'/'} className=' text-main'>{destination}</Link>
                    <span className="mx-3  cursor-pointer">
                        <MdNavigateNext className=' text-xl text-mainGray' />
                    </span>
                    <Link href="/" className=' text-mainGray'>صفحه اصلی</Link>
                </div>

            </div>
        </section>
    )
}
