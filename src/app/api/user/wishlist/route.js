import connectToDB from "@/configs/db";
import WishlistModel from "@/models/Wishlist";
import { authUser } from "@/app/api/utils/serverHelpers";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { product } = body;


    const userInfo = await authUser()
    
    if (!userInfo) {
      return Response.json({ message: "لطفا ابتدا وارد شوید", status: 403 }, { status: 403 });
    }
    const user = await userInfo._id
    
    const validationResult = await WishlistModel.wishlistValidation({ id: product }).catch((err) => {
      err.statusCode = 400
      return err;
    });
    if (validationResult.statusCode && validationResult.statusCode === 400) {
      return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
    }


    const isProductExistInWishList = await WishlistModel.findOne({ user, product });

    if (isProductExistInWishList) {
      return Response.json({ message: "این محصول در علاقه مندی ها وجود دارد" }, { status: 409 });
    }

    await WishlistModel.create({ user, product });

    return Response.json(
      { message: "محصول به علاقه مندی ها اضافه شد" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: err.message }, { status: 500 });
  }
}
