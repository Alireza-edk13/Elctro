"use client";
import { MdEmail } from "react-icons/md";
import React, { useState } from 'react'

export default function CreateAccount() {
  const [isUserWantToCreateAccount, setIsUserWantToCreateAccount] = useState(false)

    return (
        <div class=" mt-6">
            <div class=" flex items-center gap-1 mb-6">
                <input class=" cursor-pointer" type="checkbox" name="checkbox" id='createAccount' onChange={() => {
                    setIsUserWantToCreateAccount(prevState => !prevState)
                }} />
                <label class=" text-mainGray cursor-pointer" htmlFor="createAccount"><span>میخوای اکانت بسازی؟</span></label>
            </div>
            <div className='h-16'>
                <div className={`flex ${isUserWantToCreateAccount ? 'h-full' : 'h-0'} transition-all duration-500 overflow-hidden flex-col relative`}>
                    <input type="text" id="email"
                        className="border-none outline-none text-md  h-full w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                        placeholder="رمز عبور" autoComplete="off" />
                    <span className='absolute left-4 top-5 text-main'>
                        <MdEmail className=' text-2xl' />
                    </span>
                </div>
            </div>
        </div>
    )
}
