"use client";
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/slice/cartSlice';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
export default function AddProductToCart({ cover, orginalPrice, name, discount, brand, id }) {
    const dispatch = useDispatch();

    const addToCart = () => {
        const price = Math.floor(orginalPrice - ((orginalPrice * discount) / 100));
        dispatch(addItem({ id, cover, price, name, discount, brand, count: 1 }));
    };

    return (
        <div onClick={addToCart} className="p-3 bg-mainBg cursor-pointer transition-all duration-200 ease-in hover:text-white hover:bg-main sm:hover:-translate-y-1 text-xl rounded-lg absolute left-0 bottom-0 product-btn addToCart">
            <HiOutlineShoppingBag />
        </div>
    )
}
