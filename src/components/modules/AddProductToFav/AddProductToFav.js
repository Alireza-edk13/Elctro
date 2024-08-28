"use client"
import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { useGetMeUserQuery } from '@/redux/api/authApi';
import { toast } from 'react-toastify';
import { useAddToWishlistMutation, useRemoveFromWishlistMutation } from '@/redux/api/userPanelApi';
import { useRouter } from 'next/navigation';
export default function AddProductToFav({ id, isAddFavForProductDetails = false, isInWishlist = false }) {
    

    const { data } = useGetMeUserQuery()

    const [addToWishList, addToWishListRes] = useAddToWishlistMutation()
    const [removeFromWishlist,removeFromWishlistRes] = useRemoveFromWishlistMutation()
    const router = useRouter();

    const addToWishListHandler = async (product) => {
        try {
            const result = await addToWishList({ product }).unwrap();
            console.log(result);
            if (!addToWishListRes.isLoading) {
                toast.success(result.message)
                router.refresh()
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.data?.message)
        }
    }

    const removeFromWishlistHandler = async (product) => {
        
        try {
            const result = await removeFromWishlist(product).unwrap();
            console.log(result);
            if (!removeFromWishlistRes.isLoading) {
                toast.success(result.message)
                router.refresh()
            }
        } catch (err) {
            console.error(err);
            toast.error(err?.data?.message)
        }
    }


    const addToWishlist = () => {
        if (!data) {
            toast.info("برای اضافه کردن ابتدا باید لاگین کنید")
        } else {
            addToWishListHandler(id)
        }
    }


    return (

        <>


            {
                isInWishlist ?
                    <div onClick={() => removeFromWishlistHandler(id)} className={`p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative text-red-500 hover:text-white  text-xl  rounded-lg product-btn removeFromFav ${isAddFavForProductDetails ? "border border-mainBorder" : "shadow-custom"}`}>
                        <FaHeart />
                    </div>

                    :

                    <div onClick={addToWishlist} className={`p-3 bg-white cursor-pointer transition-all duration-200 ease-in hover:bg-main relative hover:text-white  text-xl  rounded-lg product-btn addToFav ${isAddFavForProductDetails ? "border border-mainBorder" : "shadow-custom"}`}>
                        <IoMdHeartEmpty />
                    </div>

            }


        </>

    )
}
