import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Btn({ text, style }) {
    return (
        <div className={` btn ${style}`}>
            <IoIosArrowRoundForward className=' text-2xl ' />
            <span className=' text-sm'>{text}</span>
        </div>
    )
}
3