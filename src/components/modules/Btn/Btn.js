import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Btn({ text, style }) {
    return (
        <div className={` btn ${style}`}>
            <span className=' text-sm '>{text}</span>
            <IoIosArrowRoundForward className=' text-2xl rotate-180' />
        </div>
    )
}
3