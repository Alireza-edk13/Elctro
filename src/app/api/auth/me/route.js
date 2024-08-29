import connectToDB from "@/configs/db";
import { verifyAccessToken } from "@/app/api/utils/auth";
import { cookies } from "next/headers";
import UserModel from "@/models/User";

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
            }
            return Response.json(user);
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
