
import CategoryModel from "@/models/Category";
import connectToDB from '@/configs/db';
import { authAdmin } from "@/utils/serverHelpers";

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

export async function DELETE(req) {
    try {
        connectToDB();
        const body = await req.json();
        const { id } = body;

        const isAdmin = await authAdmin();

        if (!isAdmin) {
            throw new Error("شما دسترسی لازم به عنوان ادمین ندارید");
        }

        const deletedCategory = await CategoryModel.findOneAndDelete({
            _id: id,
        });
        if (!deletedCategory) {
            return res.status(404).json({ message: "دسته بندی یافت نشد" });
        }

        return Response.json(
            { message: "دسته بندی با موفقیت حذف شد", status: 201 },
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

        console.log(id,title);
        

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