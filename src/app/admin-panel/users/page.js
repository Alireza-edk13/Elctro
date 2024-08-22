import TopSectionPanel from '@/components/modules/AdminPanel/TopSectionPanel/TopSectionPanel'
import Button from '@/components/modules/Button/Button'
import UsersTable from '@/components/templates/AdminPanel/Users/UsersTable/UsersTable'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import UserModel from "@/models/User";
import connectToDB from '@/configs/db'

export default async function page() {

  connectToDB();
  const users = await UserModel.find({},
    "-password -refreshToken -__v").sort({ _id: -1 }).lean();

  return (
    <>
      <TopSectionPanel title='لیست کابران' spanTitle="کابران" />
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
            <div className=' size-fit' >
              <Button style=' w-[160px] bg-green-500' text='اضافه کردن کاربر +' isIconNeed={false} />
            </div>
          </div>
          <div className=' overflow-auto'>
            {
              users.length ?
                <UsersTable users={JSON.parse(JSON.stringify(users))} />
                : <div className=' mt-8 bg-mainBg rounded-lg p-3 text-sm'>کاربری یافت نشد !</div>
            }
          </div>
        </div>

      </div>
    </>
  )
}
