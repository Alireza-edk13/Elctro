import {
    generateAccessToken,
    generateRefreshToken,
    verifyPassword,
} from "@/utils/auth";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

export async function POST(req) {
    try {
        connectToDB();
        const body = await req.json();
        const { phone, password } = body;

        // Validation

        const validationResult = await UserModel.loginValidation(body).catch((err) => {
            err.statusCode = 400
            return err;
        });
        if (validationResult.statusCode && validationResult.statusCode === 400) {
            return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
        }


        const user = await UserModel.findOne({ phone });

        if (!user) {
            return Response.json({ message: "کاربری با این اطلاعات یافت نشد" }, { status: 422 });
        }

        
        const isPasswordValid = await verifyPassword(password, user.password);


        if (!isPasswordValid) {
            return Response.json(
                { message: "شماره همراه یا رمز عبور اشتباه است" },
                { status: 401 }
            );
        }

        const accessToken = generateAccessToken({ phone });
        const refreshToken = generateRefreshToken({ phone });

        await UserModel.findOneAndUpdate(
            { phone },
            {
                $set: {
                    refreshToken,
                },
            }
        );

        const headers = new Headers();
        headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true;`);
        headers.append(
            "Set-Cookie",
            `refresh-token=${refreshToken};path=/;httpOnly=true;`
        );

        return Response.json(
            { message: "با موفقیت وارد شدید" , status: 201 },
            {
                status: 200,
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
