import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { generateAccessToken, hashPassword } from "@/utils/auth";
import { roles } from "@/utils/constants";

export async function POST(req) {
    try {
        connectToDB();
        const body = await req.json();
        const { name, phone, email, password } = body;

        const validationResult = await UserModel.registerValidation(body).catch((err) => {
            err.statusCode = 400
            return err;
        });
        if (validationResult.statusCode && validationResult.statusCode === 400) {
            return Response.json({ message: validationResult.message }, { status: validationResult.statusCode });
        }


        const isUserExist = await UserModel.findOne({
            $or: [{ email }, { phone }],
        });

        if (isUserExist) {
            return Response.json({ message: "اکانتی با شماره همراه یا ایمیل درج شده از قبل وجود داشته است" }, { status: 409 });
        }

        const hashedPassword = await hashPassword(password);
        const accessToken = generateAccessToken({ email });

        const users = await UserModel.find({});

        await UserModel.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role: users.length > 0 ? roles.USER : roles.ADMIN,
        });

        return Response.json(
            { message: "ثبت نام با موفقیت انجام شد" },
            {
                status: 201,
                headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
            }
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

