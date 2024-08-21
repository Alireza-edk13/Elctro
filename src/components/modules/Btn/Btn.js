import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Btn({ text, style, href, isIconNeed = true }) {
    return (
        <Link href={href} className={` btn text-white  ${style} `}>
            <span className=' text-sm '>{text}</span>
            {
                isIconNeed &&
                <IoIosArrowRoundForward className=' text-2xl rotate-180' />
            }
        </Link>
    )
}
3