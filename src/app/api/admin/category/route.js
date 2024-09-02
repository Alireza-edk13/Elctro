import CategoryModel from "@/models/Category";
import connectToDB from '@/configs/db';
import { authAdmin } from "@/app/api/utils/serverHelpers";
import ProductModel from "@/models/Product";
import WishlistModel from "@/models/Wishlist";
import path from 'path';
import { unlink } from 'fs/promises';
export async function DELETE(req) {
    try {
        await connectToDB(); // اتصال به دیتابیس باید await شود

        const body = await req.json();
        const { id } = body;

        const isAdmin = await authAdmin(); // تایید ادمین بودن کاربر

        if (!isAdmin) {
            throw new Error("شما دسترسی لازم به عنوان ادمین ندارید");
        }

        // حذف دسته‌بندی
        const deletedCategory = await CategoryModel.findOneAndDelete({
            _id: id,
        });

        if (!deletedCategory) {
            return new Response(JSON.stringify({ message: "دسته بندی یافت نشد" }), { status: 404 });
        }

        // یافتن و حذف محصولات مرتبط با دسته‌بندی
        const productsToDelete = await ProductModel.find({ categoryId: id });

        if (productsToDelete.length > 0) {
            const productIds = productsToDelete.map(product => product._id);

            // حذف محصولات مرتبط
            await ProductModel.deleteMany({ _id: { $in: productIds } });

            // حدف کاور

            for (const product of productsToDelete) {
                const oldCoverPath = path.join(process.cwd(), "public/uploads/", product.cover);
                await unlink(oldCoverPath).catch(() => { });
            }

            // حذف محصولات از لیست علاقه‌مندی‌های کاربران
            await WishlistModel.deleteMany({ product: { $in: productIds } });
        }

        return new Response(JSON.stringify({
            message: "دسته بندی و محصولات  مرتبط با آن موفقیت حذف شدند",
            status: 201
        }), { status: 201 });

    } catch (err) {
        return new Response(JSON.stringify({ message: err.message }), { status: 500 });
    }
}

export async function POST(req) {
    try {
        connectToDB();
        const body = await req.json();
        const { title } = body;

        const isAdmin = await authAdmin();

        if (!isAdmin) {
            throw new Error("شما دسترسی لازم به عنوان ادمین ندارید");
        }

        const validationResult = await CategoryModel.categoryValidation(body).catch((err) => {
            err.statusCode = 400
            return err;
        });
        if (validationResult.statusCode && validationResult.statusCode === 400) {
            return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
        }



        const isCategoryExist = await CategoryModel.findOne({
            $or: [{ title }],
        });

        if (isCategoryExist) {
            return Response.json({ message: "دسته بندی با این عنوان وجود دارد" }, { status: 409 });
        }


        await CategoryModel.create({ title });


        return Response.json(
            { message: "دسته بندی با موفقیت اضافه شد", status: 201 },
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
        const body = await req.json();
        const { id, title } = body;


        const isAdmin = await authAdmin();

        if (!isAdmin) {
            throw new Error("شما دسترسی لازم به عنوان ادمین ندارید");
        }

        const validationResult = await CategoryModel.categoryValidation(body).catch((err) => {
            err.statusCode = 400
            return err;
        });
        if (validationResult.statusCode && validationResult.statusCode === 400) {
            return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
        }

        const updatedCategory = await CategoryModel.findOneAndUpdate(
            { _id: id },
            { title },
        );
        if (!updatedCategory) {
            return Response.json({ message: "دسته بندی یافت نشد" }, { status: 404 });
        }

        return Response.json(
            { message: "دسته بندی با موفقیت به روزرسانی شد", status: 201 },
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