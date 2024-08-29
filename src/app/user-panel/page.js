import InfoBox from '@/components/templates/AdminPanel/InfoBox/InfoBox'
import React from 'react'
import WishlistModel from "@/models/Wishlist"
import ProductBox from '@/components/modules/ProductBox/ProductBox';
import { authUser } from '@/utils/serverHelpers';
import NotFoundItem from '@/components/modules/NotFoundItem/NotFoundItem'
import connectToDB from '@/configs/db';

export default async function page() {

    connectToDB();
    const user = await authUser();
    const wishlist = await WishlistModel.find({ user: user._id }).populate({
        path: 'product',
        populate: {
            path: 'categoryId',
            model: 'Category',
            select: "title"
        }
    }).lean().sort({ _id: -1 }).limit(4);



    return (
        <>
            <h4 className=' font-morabba text-main text-2xl'>{user?.name} خوش اومدی !</h4>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <InfoBox title="سفارشات" count={0} />
                <InfoBox title="علاقه مندی ها" count={wishlist.length > 10 || !wishlist.length ? wishlist.length : "0" + wishlist.length} />
                <InfoBox title="تیکت ها" count={0} />
            </div>
            <div>
                <h4 className=' mt-20  border-b-2 border-mainBlack pb-7 sm:pb-10 font-morabba text-lg text-main sm:text-2xl'>آخرین محصولات اضافه شده به علاقه مندی ها</h4>

                {
                    wishlist.length ?
                        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8'>
                            {wishlist.map(wish => (
                                <ProductBox key={wish._id} _id={wish.product._id.toString()} name={wish.product.name} cover={wish.product.cover} orginalPrice={wish.product.orginalPrice} discount={wish.product.discount} categoryId={wish.product.categoryId} brand={wish.product.brand} stock={wish.product.stock} isInWishlist={true} isProductBoxForProductsList={true} />
                            ))}
                        </div>
                        :
                        <NotFoundItem text="محصولی یافت نشد!" />
                }

            </div>

        </>
    )
}
