import { closeSideBar } from '@/redux/slice/sideBarMobileSlice'
import Link from 'next/link'
import React  from 'react'
import { useDispatch } from 'react-redux'

export default function MobileSubMenuItem({ title, href }) {

    const dispatch = useDispatch()

     return (
        <li onClick={() => dispatch(closeSideBar())}>
            <Link href={href} className=' flex hover:text-main justify-between pl-4 leading-8 transition-all duration-500 items-center text-mainBlack capitalize font-InterSB h-11'>
                {title}
            </Link>
        </li>
    )
}
