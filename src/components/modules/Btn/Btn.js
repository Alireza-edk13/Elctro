import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Btn({ text, style , href }) {
    return (
        <Link href={href} className={` btn ${style} text-white`}>
            <span className=' text-sm '>{text}</span>
            <IoIosArrowRoundForward className=' text-2xl rotate-180' />
        </Link>
    )
}
3