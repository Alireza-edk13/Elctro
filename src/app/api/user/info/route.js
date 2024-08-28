import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { authUser } from "@/utils/serverHelpers";



export async function PUT(req) {
    try {
        connectToDB();
        const user = await authUser();
        const body = await req.json();
        const { name, email, phone, province, city, address, postalCode } = body;

        const isUser = await authUser();


        if (!isUser) {
            return Response.json({ message: "شما دسترسی لازم رو ندارید", status: 403 }, { status: 403 });
        }

        const validationResult = await UserModel.updateUserValidation(body).catch((err) => {
            err.statusCode = 400;
            return err;
        });

        if (validationResult.statusCode && validationResult.statusCode === 400) {
            return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
        }

        await UserModel.findOneAndUpdate(
            { _id: user._id },
            {
                $set: {
                    name,
                    email,
                    phone,
                    province,
                    city,
                    address,
                    postalCode
                },
            }
        );

        return Response.json(
            { message: "اطلاعات شما با موفقیت آپدیت شد" },
            { status: 200 }
        );
    } catch (err) {
        return Response.json({ message: err.message }, { status: 500 });
    }
}