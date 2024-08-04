import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
export default function InfoBox({ icon, title, text }) {
    return (
        <div class={`flex items-center justify-evenly relative gap-2 md:gap-0 xl:gap-2 2xl:gap-0 p-6 m:p-8 ${ icon !== "FaTruck" && "infoBoxBefore"}`}>
            <div class=" rounded-full bg-main size-14 flex-center text-white text-3xl">
                {
                    icon === "FaTruck" && <FaTruck /> ||
                    icon === "FaRotate" && <FaRotate /> ||
                    icon === "BiSupport" && <BiSupport /> ||
                    icon === "RiSecurePaymentLine" && <RiSecurePaymentLine />
                }
            </div>
            <div class="box-info col-12 col-md-9 w-36">
                <span class=" text-lg block">{title}</span>
                <span class=" text-mainGray text-sm font-normal">{text}</span>
            </div>
        </div>
    )
}
