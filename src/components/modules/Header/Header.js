import React from 'react'
import Nav from './Nav/Nav'
import { authUser } from '@/app/api/utils/serverHelpers';
import connectToDB from '@/configs/db';
import WishlistModel from "@/models/Wishlist";

export default async function Header() {

  const user = await authUser();
  let wishlist = []
  connectToDB();
  if (user) {
    wishlist = await WishlistModel.find({ user: user?._id.toString() }).populate("product");
  }
  


  return (
    <>
      <header>
        <Nav isLogin={user ? true : false} wishlistLength={wishlist.length} />
      </header>
    </>
  )
}
