import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Btn({ text, style }) {
    return (
        <div className={` btn ${style}`}>
            <span>{text}</span>
            <IoIosArrowRoundForward className=' text-2xl' />
        </div>
    )
}
3