"use client"
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import CartSummery from '@/components/modules/CartSummery.js/CartSummery'
import ProductBoxForCart from '@/components/templates/Cart/ProductBoxForCart/ProductBoxForCart'
import { setCart } from '@/redux/slice/cartSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(setCart(storedCart));
  }, [dispatch]);

  return (
    <>
      <Breadcrumbs destination="سبد خرید" />
      <section className=' container mt-8'>
        <h4 className=' text-main mb-16'> سبد خرید شما :</h4>
        <div className=' grid grid-cols-12 gap-y-16 xl:gap-6 mb-36'>
          <div className=' col-span-12 xl:col-span-8'>
            <div className=' space-y-4'>
              {
                cart.map((product) => (
                  <ProductBoxForCart key={product.id} {...product} />
                ))
              }
            </div>

          </div>
          <div className=' col-span-12 xl:col-span-4'>
            <CartSummery text="نهایی کردن سفارش" />
          </div>
        </div>
      </section>
    </>
  )
}
