import connectToDB from "@/configs/db";
import ContactModel from "@/models/Contact";
import { authAdmin } from "@/utils/serverHelpers";

export async function POST(req) {
    try {
        connectToDB();
        const body = await req.json();
        const { name, email, phone, message } = body;

        console.log(body);


        const validationResult = await ContactModel.contactValidation(body).catch((err) => {
            err.statusCode = 400
            return err;
        });
        if (validationResult.statusCode && validationResult.statusCode === 400) {
            return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
        }

        await ContactModel.create({ name, email, phone, message });

        return Response.json(
            { message: "پیام شما با موفقیت ارسال شد" },
            { status: 201 }
        );
    } catch (err) {
        return Response.json(
            { message: err },
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

        const deletedMessage = await ContactModel.findOneAndDelete({
            _id: id,
        });
        if (!deletedMessage) {
            return res.status(404).json({ message: "پیام با موفقیت یافت نشد" });
        }


        return Response.json(
            { message: "پیام با موفقیت حدف شد", status: 201 },
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
