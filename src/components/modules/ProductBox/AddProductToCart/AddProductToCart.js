"use client";
import React, { useEffect } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, incrementItemCount, decrementItemCount, setCart } from '@/redux/slice/cartSlice';

export default function AddProductToCart({ cover, orginalPrice, name, discount, brand, id }) {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        dispatch(setCart(storedCart));
    }, [dispatch]);


    const addToCart = () => {
        const price = Math.floor(orginalPrice - ((orginalPrice * discount) / 100));
        dispatch(addItem({ id, cover: cover, price, name: name, discount: discount, brand: brand, count: 1 }));
    };

    const increaseProduct = () => {
        dispatch(incrementItemCount(id));
    };

    const reduceProduct = () => {
        const item = items.find(item => item.id === id);
        if (item.count > 1) {
            dispatch(decrementItemCount(id));
        } else {
            removeFromCart();
        }
    };

    const removeFromCart = () => {
        dispatch(removeItem(id));
    };

    return (

        <>

            {items.find(item => item.id === id) ? (
                <div className='flex items-center gap-2 text-main'>
                    <button className="size-6 text-base text-center inline-block rounded-2xl bg-mainBg  pt-1 cursor-pointer" onClick={reduceProduct}>-</button>
                    <span className="text-base">{items.find(item => item.id === id)?.count || 1}</span>
                    <button className="size-6 text-base text-center flex-center inline-block rounded-2xl bg-mainBg  pt-1 cursor-pointer" onClick={increaseProduct}>+</button>
                </div>
            ) : (
                <div onClick={addToCart} className="p-3 bg-mainBg cursor-pointer transition-all duration-200 ease-in hover:text-white hover:bg-main sm:hover:-translate-y-1 text-xl rounded-lg absolute left-0 bottom-0 product-btn addToCart">
                    <HiOutlineShoppingBag />
                </div>
            )}




        </>
    )
}
