import connectToDB from "@/configs/db";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";
import UserModel from "@/models/User";

export async function GET(req) {
    try {
        connectToDB();
        const token = cookies().get("token");
        console.log(token);
        
        let user = null;

        if (token) {
            const tokenPayload = verifyAccessToken(token.value);
            console.log(tokenPayload);
            
            if (tokenPayload) {
                user = await UserModel.findOne(
                    { phone: tokenPayload.phone },
                    "-password -refreshToken -__v"
                );
            }
            
            console.log(user);
            

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
