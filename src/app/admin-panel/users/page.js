import TopSectionPanel from '@/components/modules/AdminPanel/TopSectionPanel/TopSectionPanel'
import Button from '@/components/modules/Button/Button'
import UsersTable from '@/components/templates/AdminPanel/Users/UsersTable/UsersTable'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import UserModel from "@/models/User";
import connectToDB from '@/configs/db'

export default async function page() {

  connectToDB();
  const users = await UserModel.find({},
    "-password -refreshToken -__v").lean();

  return (
    <>
      <TopSectionPanel title='لیست کابران' spanTitle="کابران" />
      <div className="mt-8">
        <div className="p-4 bg-mainWhite rounded-md overflow-auto">
          <div className="flex justify-between flex-wrap gap-6">
            <div>
              <form className=' relative'>
                <button className=' absolute left-3 top-2 border-none'>
                  <IoIosSearch fontSize={'1.6rem'} className=' text-main' />
                </button>
                <input type="text" placeholder="جستجو..." className=' text-sm outline-none bg-transparent border-2 border-mainBorder py-2 text-gray-500 placeholder:text-gray-500 rounded-md pr-5 pl-10' />
              </form>
            </div>
            <div className=' size-fit' >
              <Button style=' w-[160px] bg-green-500' text='اضافه کردن کاربر +' isIconNeed={false} />
            </div>
          </div>
          <UsersTable users={JSON.parse(JSON.stringify(users))} />
        </div>

      </div>
    </>
  )
}
