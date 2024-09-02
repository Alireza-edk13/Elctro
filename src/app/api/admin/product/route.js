import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import { authAdmin } from "@/app/api/utils/serverHelpers";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import WishlistModel from "@/models/Wishlist";

export async function POST(req) {
    try {
        connectToDB();

        const isAdmin = await authAdmin();

        if (!isAdmin) {
            throw new Error("شما دسترسی لازم به عنوان ادمین ندارید");
        }

        const formData = await req.formData();


        const name = formData.get("name");
        const shortName = formData.get("shortName");
        const orginalPrice = formData.get("orginalPrice");
        const brand = formData.get("brand");
        const discount = formData.get("discount");
        const stock = formData.get("stock");
        const cover = formData.get("cover");
        const categoryId = formData.get("categoryId")


        const validationResult = await ProductModel.createProductValidation({ name, shortName, orginalPrice, brand, discount, stock, cover, categoryId }).catch((err) => {
            err.statusCode = 400
            return err;
        });
        if (validationResult.statusCode && validationResult.statusCode === 400) {
            return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
        }



        const isProductExist = await ProductModel.findOne({
            $or: [{ name }],
        });

        if (isProductExist) {
            return Response.json({ message: "محصولی با این عنوان از قبل وجود دارد" }, { status: 409 });
        }


        const buffer = Buffer.from(await cover.arrayBuffer());
        const filename = Date.now() + cover.name;
        const coverPath = path.join(process.cwd(), "public/uploads/" + filename);

        await writeFile(coverPath, buffer);

        const product = await ProductModel.create({
            name,
            shortName,
            orginalPrice,
            brand,
            categoryId,
            discount,
            stock,
            cover: filename,
        });

        const populatedProduct = await ProductModel
            .findById(product._id, "-__v")
            .populate("categoryId", "_id title");

        return Response.json(
            { message: "محصول با موفقیت اضافه شد", data: populatedProduct },
            { status: 201 }
        );
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 });
    }
}

export async function GET() {
    const products = await ProductModel.find({}, "-__v").populate("categoryId");
    return Response.json(products);
}

export async function DELETE(req) {
    try {
        connectToDB();
        const body = await req.json();
        const { id } = body;

        const isAdmin = await authAdmin();

        if (!isAdmin) {
            throw new Error("شما دسترسی لازم به عنوان ادمین ندارید");
        }

        const deletedProduct = await ProductModel.findOneAndDelete({
            _id: id,
        });
        if (!deletedProduct) {
            return res.status(404).json({ message: "محصول یافت نشد" });
        }

        await WishlistModel.deleteMany({ product: { $in: id } });

        // Delete the old cover image
        const oldCoverPath = path.join(process.cwd(), "public/uploads/", deletedProduct.cover);
        await unlink(oldCoverPath).catch(() => { });

        return Response.json(
            { message: "محصول حدف شد", status: 201 },
            {
                status: 201,
            }
        );
    } catch (err) {
        return Response.json(
            { message: err.message },
            {
                status: 500,
            }
        );
    }
}

export async function PUT(req) {
    try {
        connectToDB();

        const isAdmin = await authAdmin();
        if (!isAdmin) {
            throw new Error("شما دسترسی لازم به عنوان ادمین ندارید");
        }

        const formData = await req.formData();

        const productId = formData.get("id");
        const name = formData.get("name");
        const shortName = formData.get("shortName");
        const orginalPrice = formData.get("orginalPrice");
        const brand = formData.get("brand");
        const discount = formData.get("discount");
        const stock = formData.get("stock");
        const cover = formData.get("cover");
        const categoryId = formData.get("categoryId");

        const product = await ProductModel.findById(productId);
        if (!product) {
            return Response.json({ message: "محصول یافت نشد" }, { status: 404 });
        }

        // Validate the data
        const validationResult = await ProductModel.editProductValidation({
            name, shortName, orginalPrice, brand, discount, stock, categoryId, cover
        }).catch((err) => {
            err.statusCode = 400;
            return err;
        });

        if (validationResult.statusCode && validationResult.statusCode === 400) {
            return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
        }

        // Check if a new cover was provided and if it is different from the old one
        if (cover && cover.size > 0) {
            const buffer = Buffer.from(await cover.arrayBuffer());
            const filename = Date.now() + cover.name;
            const coverPath = path.join(process.cwd(), "public/uploads/", filename);

            // Only replace the cover if the new one is different
            if (cover.name !== product.cover) {
                // Delete the old cover image
                const oldCoverPath = path.join(process.cwd(), "public/uploads/", product.cover);
                await unlink(oldCoverPath).catch(() => { });

                // Save the new cover image
                await writeFile(coverPath, buffer);
                product.cover = filename; // Update the cover in the product document
            }
        }

        // Update the product fields
        product.name = name;
        product.shortName = shortName;
        product.orginalPrice = orginalPrice;
        product.brand = brand;
        product.discount = discount;
        product.stock = stock;
        product.categoryId = categoryId;

        await product.save(); // Save the updated product

        const populatedProduct = await ProductModel
            .findById(product._id, "-__v")
            .populate("categoryId", "_id title");

        return Response.json(
            { message: "محصول با موفقیت بروزرسانی شد", data: populatedProduct },
            { status: 200 }
        );
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 });
    }
}