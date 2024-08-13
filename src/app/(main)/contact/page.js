import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import Btn from '@/components/modules/Btn/Btn'
import ContactCart from '@/components/templates/Contact/ContactCart/ContactCart'
import Map from '@/components/templates/Contact/Map/Map'
import React from 'react'
import { FaPhone, FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function contact() {
    return (
        <>
            <Breadcrumbs destination="ارتباط یا ما" />
            <section className=' container mt-16 mb-32'>
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className=' order-1 lg:order-0'>
                        <div className=' grid grid-cols-12 gap-6'>
                            <h4 className=' text-3xl mb-2 col-span-12 font-morabba text-main'>ارتباط با ما</h4>
                            <div className=' col-span-12 sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="Name"
                                        className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="نام و نام خانوادگی" autoComplete="off" />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <FaUser className=' text-2xl' />
                                    </span>
                                </div>
                            </div>
                            <div className=' col-span-12 sm:col-span-6'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="phone"
                                        className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="شماره همراه" autoComplete="off" />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <FaPhone className=' text-2xl' />
                                    </span>
                                </div>
                            </div>
                            <div className=' col-span-12'>
                                <div className="flex flex-col relative">
                                    <input type="text" id="email"
                                        className="border-none outline-none text-md  h-16 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="ایمیل" autoComplete="off" />
                                    <span className='absolute left-4 top-5 text-main'>
                                        <MdEmail className=' text-2xl' />
                                    </span>
                                </div>
                            </div>
                            <div className=' col-span-12'>
                                <div className="flex flex-col relative">
                                    <textarea id="phone"
                                        className="border-none outline-none text-md min-h-32 max-h-40 w-full bg-[#f4f5f9] rounded-lg p-4 text-[#4f5d77]"
                                        placeholder="اطلاعات بیشتر" autoComplete="off" />
                                </div>
                            </div>
                            <div className=' col-span-12 flex justify-end'>
                                <Btn href={"/"} text="ارسال پیام" />
                            </div>
                        </div>
                    </div>
                    <div className='order-0 lg:order-1 flex-center'>
                        <Map />
                    </div>
                </div>
                <div className="grid xl:grid-cols-3 gap-6 mt-32">
                    <ContactCart icon='IoLocationOutline' title='بابل میدان ولایت' />
                    <ContactCart icon='HiOutlinePhone' title="09132535535" />
                    <ContactCart icon='IoMailOutline' title='email@example.com' />
                </div>
            </section>
        </>
    )
}
