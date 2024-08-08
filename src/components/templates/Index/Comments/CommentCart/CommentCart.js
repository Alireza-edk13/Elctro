import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
export default function CommentCart() {
  return (

      <div class="bg-white rounded-lg p-6 mb-6">
        <div class=" flex justify-start items-center gap-3 border-b-2 border-mainBorder pb-4">
          <div class="person-img">
            <Image src="/images/person/person3.webp" width={70} height={70} className=' rounded-full' alt="commentImg" />
          </div>
          <div>
            <h5 className=' text-lg font-semibold'>علی صفری</h5>
            <p  className=' text-main'>مشتری</p>
          </div>
        </div>
        <p class=" text-mainGray py-4 text-sm leading-7">
          یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب 
           را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد و من اینو تو الکترو دیدم
        </p>
        <div class="flex items-center justify-between">
          <div className=" flex items-center my-2 justify-start gap-1 text-main text-lg">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div class=" text-main text-4xl">
            <FaCommentDots />
          </div>
        </div>
      </div>

  )
}
