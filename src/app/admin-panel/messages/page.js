import TopSectionPanel from '@/components/modules/AdminPanel/TopSectionPanel/TopSectionPanel'
import React from 'react'
import connectToDB from '@/configs/db'
import ContactModel from "@/models/Contact";
import MessagesTable from '@/components/templates/AdminPanel/Messages/MessagesTable/MessagesTable';
import { IoIosSearch } from 'react-icons/io';
export const revalidate = 0
export default async function page() {

    connectToDB();
    const messages = await ContactModel
        .find({}, "-__v")
        .sort({ _id: -1 }).lean();

    return (
        <>
            <TopSectionPanel title="پیام های ارسال شده" spanTitle="پیام ها" />
            <div className=" mt-0 lg:mt-8">
                <div className="p-4 rounded-md">
                    <div className="flex justify-between flex-wrap gap-6  border-b-2 border-mainBlack pb-10">
                        <div>
                            <form className=' relative'>
                                <button className=' absolute left-3 top-2 border-none'>
                                    <IoIosSearch fontSize={'1.6rem'} className=' text-main' />
                                </button>
                                <input type="text" placeholder="جستجو..." className=' text-sm outline-none bg-transparent border-2 border-mainBorder w-full sm:w-[350px] h-10 py-2 text-gray-500 placeholder:text-gray-500 rounded-md pr-5 pl-10' />
                            </form>
                        </div>
                    </div>
                    <div className=' overflow-auto'>
                        {
                            messages.length ?
                                <MessagesTable messages={JSON.parse(JSON.stringify(messages))}
                                />
                                : <div className=' mt-8 bg-mainBg rounded-lg p-3 text-sm'>پیامی برای نمایش وجود ندارد</div>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}
