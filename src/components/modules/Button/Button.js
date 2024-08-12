import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function Button({style,text}) {
    return (
        <div className={` btn ${style || ""} text-white`}>
            <span className=' text-sm '>{text}</span>
            <IoIosArrowRoundForward className=' text-2xl rotate-180' />
        </div>
    )
}
