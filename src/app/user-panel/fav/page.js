
import NotFoundItem from '@/components/modules/NotFoundItem/NotFoundItem'
import TopSectionPanel from '@/components/modules/UserPanel/TopSectionPanel/TopSectionPanel'
import connectToDB from '@/configs/db';
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import WishlistModel from "@/models/Wishlist"
import ProductBox from '@/components/modules/ProductBox/ProductBox';
import { authUser } from '@/app/api/utils/serverHelpers';

export default async function fav() {

  connectToDB();
  const user = await authUser();
  const wishlist = await WishlistModel.find({ user: user._id }).populate({
    path: 'product',
    populate: {
      path: 'categoryId',
      model: 'Category',
      select: "title"
    }
  }).lean();




  return (
    <>
      <TopSectionPanel title="لیست علاقه مندی ها" spanTitle="علاقه مندی ها" />
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

          {
            wishlist.length ?
              <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8'>
                {wishlist.map(wish => (
                  <ProductBox key={wish._id} _id={wish.product._id.toString()} name={wish.product.name} cover={wish.product.cover} orginalPrice={wish.product.orginalPrice} discount={wish.product.discount} categoryId={wish.product.categoryId} brand={wish.product.brand} stock={wish.product.stock}  isInWishlist ={true} isProductBoxForProductsList={true} />
                ))}
              </div>
              :
              <NotFoundItem text="محصولی یافت نشد!" />
          }

        </div>

      </div>
    </>
  )
}
