import React from 'react'
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa";
import { IoTicket } from 'react-icons/io5';
import { RiMoneyPoundCircleFill } from "react-icons/ri";

export default function InfoBox({ title, count }) {
    return (
        <div className="flex items-center bg-mainWhite border rounded-md overflow-hidden shadow">
            <div className="p-5 bg-main text-4xl h-full text-white">
                {
                    title === "ثبت نامی‌ها" && <FaUser />
                    || title === "سفارشات" && <FaCartShopping />
                    || title === "مقالات" && <FaBloggerB />
                    || title === "بازدید سایت" && <IoEyeSharp />
                    || title === "مجموع خرید" && <RiMoneyPoundCircleFill />
                    || title === "تیکت ها" && <IoTicket />
                }
            </div>
            <div className="px-4">
                <h3 className="text-md mb-1 text-gray-500 tracking-wider">
                    {title}
                </h3><p className="text-xl">{count}</p></div>
        </div>
    )
}
