import connectToDB from "@/configs/db";
import { authUser } from "@/app/api/utils/serverHelpers";
import WishlistModel from "@/models/Wishlist";

export async function DELETE(req, { params }) {
  try {
    connectToDB();

    const userInfo = await authUser()
    
    if (!userInfo) {
      return Response.json({ message: "لطفا ابتدا وارد شوید", status: 403 }, { status: 403 });
    }
    
    const user = await userInfo._id
    const productId = await params.id;

    const validationResult = await WishlistModel.wishlistValidation({ id: productId }).catch((err) => {
      err.statusCode = 400
      return err;
    });
    if (validationResult.statusCode && validationResult.statusCode === 400) {
      return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
    }

    const deletedProduct = await WishlistModel.findOneAndDelete({
      user,
      product: productId,
    });

    if (!deletedProduct) {
      return Response.json({ message: "محصول یافت نشد" }, { status: 404 });
    }

    return Response.json({ message: "محصول از علاقه مندی ها حذف شد" }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    );
  }
}
