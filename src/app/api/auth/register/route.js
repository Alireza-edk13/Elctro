import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { generateAccessToken, generateRefreshToken, hashPassword } from "@/app/api/utils/auth";
import { roles } from "@/app/api/utils/constants";

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
            return Response.json({ message: "شماره یا ایمیل درج شده از قبل اکانت دارد" }, { status: 409 });
        }

        const hashedPassword = await hashPassword(password);
        const accessToken = await generateAccessToken({ phone });
        const refreshToken = await generateRefreshToken({ phone });


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

        const cookieOptions = [
            'path=/',
            'httpOnly=true',
            'secure=true', // فقط از طریق HTTPS ارسال می‌شود
            'sameSite=lax', // به محافظت در برابر حملات CSRF کمک می‌کند
        ];

        const accessTokenExpiration = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 روز
        headers.append(
            "Set-Cookie",
            `token=${accessToken};${cookieOptions.join(';')};expires=${accessTokenExpiration.toUTCString()}`
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

