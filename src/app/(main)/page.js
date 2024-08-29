import BigPoster from '@/components/templates/Index/BigPoster/BigPoster'
import Blogs from '@/components/templates/Index/Blogs/Blogs'
import Brands from '@/components/templates/Index/Brands/Brands'
import Category from '@/components/templates/Index/Category/Category'
import Comments from '@/components/templates/Index/Comments/Comments'
import DealOfDay from '@/components/templates/Index/DealsOfDay/DealsOfDay'
import InfoBoxes from '@/components/templates/Index/InfoBoxes/InfoBoxes'
import Landding from '@/components/templates/Index/Landding/Landding'
import LastestProduct from '@/components/templates/Index/lastestProduct/lastestProduct'
import OfferBoxes from '@/components/templates/Index/OfferBoxes/OfferBoxes'
import PopularProducts from '@/components/templates/Index/PopularProducts/PopularProducts'
import TrendingProducts from '@/components/templates/Index/TrendingProducts/TrendingProducts'
import connectToDB from '@/configs/db'
import ProductModel from "@/models/Product";
import { authUser } from '@/utils/serverHelpers'
import WishlistModel from "@/models/Wishlist"

export default async function Home() {
    connectToDB();

    const lastestProducts = await ProductModel.find({}).populate("categoryId", "title -_id").sort({ _id: -1 }).limit(12);

    const user = await authUser();
    let wishlist = [];
    let wishlistProductIds = [];

    if (user) {
        wishlist = await WishlistModel.find({ user: user._id }).populate({
            path: 'product',
            select: "_id"
        }).lean();

        wishlistProductIds = wishlist.map(item => item.product._id.toString());  // استخراج آی‌دی‌های محصولات در wishlist
    }

    // اضافه کردن ویژگی `isInWishlist` به محصولات
    const updatedLastestProducts = lastestProducts.map(product => {
        const productObj = product.toObject();
        return {
            ...productObj,
            isInWishlist: wishlistProductIds.includes(productObj._id.toString()),  // بررسی وجود در wishlist
        };
    });

    return (
        <>
            <Landding />
            <InfoBoxes />
            <OfferBoxes />
            <Category />
            <LastestProduct products={JSON.parse(JSON.stringify(updatedLastestProducts))} />
            <BigPoster />
            <PopularProducts products={JSON.parse(JSON.stringify([...updatedLastestProducts].reverse()))} />
            <DealOfDay />
            <LastestProduct products={JSON.parse(JSON.stringify(updatedLastestProducts))} />
            <Brands />
            <Comments />
            <Blogs />
        </>
    )
}
