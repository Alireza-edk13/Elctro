"use client";
import React, { useEffect } from 'react';
import Button from '@/components/modules/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, incrementItemCount, decrementItemCount, setCart } from '@/redux/slice/cartSlice';

export default function ProdcutActions({ product }) {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        dispatch(setCart(storedCart));
    }, [dispatch]);


    const addToCart = () => {
        const price = Math.floor(product.orginalPrice - ((product.orginalPrice * product.discount) / 100));
        dispatch(addItem({ id: product._id, cover: product.cover, price, name: product.name, discount: product.discount, brand: product.brand, count: 1 }));
    };

    const increaseProduct = () => {
        dispatch(incrementItemCount(product._id));
    };

    const reduceProduct = () => {
        const item = items.find(item => item.id === product._id);
        if (item.count > 1) {
            dispatch(decrementItemCount(product._id));
        } else {
            removeFromCart();
        }
    };

    const removeFromCart = () => {
        dispatch(removeItem(product._id));
    };

    return (
        <>
            {items.find(item => item.id === product._id) ? (
                <div className='flex items-center gap-8'>
                    <div onClick={removeFromCart}>
                        <Button isIconNeed={false} text="حذف از سبد خرید" style="w-full md:w-48 bg-red-500" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className="size-8 text-lg text-center inline-block rounded-2xl bg-mainBg pt-1 cursor-pointer" onClick={reduceProduct}>-</button>
                        <span className="text-lg">{items.find(item => item.id === product._id)?.count || 1}</span>
                        <button className="size-8 text-lg text-center flex-center inline-block rounded-2xl bg-mainBg pt-1 cursor-pointer" onClick={increaseProduct}>+</button>
                    </div>
                </div>
            ) : (
                <div onClick={addToCart}>
                    <Button isIconNeed={false} text="اضافه کردن به سبد خرید" style="w-full md:w-48 bg-main" />
                </div>
            )}
        </>
    );
}