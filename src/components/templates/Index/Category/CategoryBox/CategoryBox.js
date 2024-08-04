import React from 'react'
import Link from 'next/link';
import { PiDesktopTower } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { PiPlugChargingFill } from "react-icons/pi";
export default function CategoryBox({ icon, name, number }) {
    return (
        <div className=' group  rounded-lg transition-all duration-75 ease-in hover:border-x-2 hover:border-main'>
            <Link href="/">
                <div class=" bg-mainBg space-y-1 flex-center flex-col p-3 rounded-lg ">
                    <div className=' rounded-full text-4xl bg-main text-white p-5'>
                        {
                            icon === "PiDesktopTower" && <PiDesktopTower /> ||
                            icon === "FaCamera" && <FaCamera /> ||
                            icon === "FaHeadphones" && <FaHeadphones/> ||
                            icon === "FaMobile" && <FaMobile /> ||
                            icon === "FaLaptop" && <FaLaptop/> ||
                            icon === "PiPlugChargingFill" && <PiPlugChargingFill /> 
                        }
                    </div>
                    <p>{name}</p>
                    <span className=' text-mainGray'>{number} item</span>
                </div>
            </Link>
        </div>
    )
}
