import React from 'react'
import { GrSend } from "react-icons/gr";
export default function Newsleter() {
    return (
        <>
            <section class=" bg-main text-white mt-20 px-3 py-6">
                <div class="container">
                    <div class=" flex  justify-evenly items-center flex-wrap">

                        <div class=" flex flex-col items-center sm:justify-center sm:flex-row gap-2 text-md 2xl:text-lg font-morabba">
                            <GrSend className= ' text-3xl sm:text-5xl' />
                            <p>ایمیل خودتو وارد کن تا از آخرین تخفیف ها یا خبر بشی</p>

                        </div>

                        <p class=" text-md mt-6 md:mt-0  2xl:text-lg text-center font-morabba"> و کد تخفیف 25 درصدی برای اولین خرید دریافت کنی</p>

                        <form class=" w-full md:w-96 relative">
                            <input type="text" className=' w-full mt-12 md:mt-0 md:w-96 h-12 rounded-full text-mainBlack py-4 pr-5' placeholder="ایمیل خودتو وارد کن" class="newsleter-input" />
                            <button class=" absolute text-white flex-center bg-mainBlack rounded-full py-4 w-28 h-12 left-0 top-12 md:top-0 cursor-pointer">ارسال</button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}
