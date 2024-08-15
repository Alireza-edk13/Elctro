import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { generateAccessToken, generateRefreshToken, hashPassword } from "@/utils/auth";
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
            return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
        }


        const isUserExist = await UserModel.findOne({
            $or: [{ email }, { phone }],
        });

        if (isUserExist) {
            return Response.json({ message: "اکانتی با شماره همراه یا ایمیل درج شده از وجود دارد" }, { status: 409 });
        }

        const hashedPassword = await hashPassword(password);
        const accessToken = generateAccessToken({ phone });
        const refreshToken = generateRefreshToken({ phone });

        const users = await UserModel.find({});

        await UserModel.create({
            name,
            email,
            phone,
            refreshToken,
            password: hashedPassword,
            role: users.length > 0 ? roles.USER : roles.ADMIN,
        });

        const headers = new Headers();
        headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true;`);
        headers.append(
            "Set-Cookie",
            `refresh-token=${refreshToken};path=/;httpOnly=true;`
        );


        return Response.json(
            { message: "ثبت نام با موفقیت انجام شد", status: 201 },
            {
                status: 201,
                headers,
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

