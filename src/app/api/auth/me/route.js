import connectToDB from "@/configs/db";
import { verifyAccessToken, verifyRefreshToken } from "@/app/api/utils/auth";
import { cookies } from "next/headers";
import UserModel from "@/models/User";
import { decodeJwt } from "jose";

export async function GET(req) {
    try {
        connectToDB();
        const token = cookies().get("token");

        let user = null;


        if (token) {
            const tokenPayload = await verifyAccessToken(token.value);

            if (tokenPayload) {
                user = await UserModel.findOne(
                    { phone: tokenPayload.phone },
                    "name phone email province city address postalCode"
                );
                if (!user) {
                    return Response.json(
                        { message: "کاریری یافت نشد" },
                        {
                            status: 404,
                        }
                    );
                }
                return Response.json(user);
            } else {
                const payloadToken = decodeJwt(token);
                
                if (!payloadToken) {
                    return Response.json(user);
                }

                const userInfo = await UserModel.findOne({ phone: payloadToken.phone });
                if (!userInfo) {
                    return Response.json(user);
                }

                const payloadRefreshToken = await verifyRefreshToken(userInfo.refreshToken);

                if (!payloadRefreshToken) {
                    return Response.json(user);
                }
                return Response.json(userInfo);

            }
        } else {
            return Response.json(
                {
                    data: null,
                    message: "You dont have access",
                },
                { status: 401 }
            );
        }
    } catch (err) {
        return Response.json(
            { message: err },
            {
                status: 500,
            }
        );
    }
}
