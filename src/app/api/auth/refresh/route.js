import { NextResponse } from 'next/server';
import { verifyAccessTokenThrowError, verifyRefreshTokenThrowError, generateAccessToken } from '@/app/api/utils/auth';
import connectToDB from '@/configs/db';
import UserModel from '@/models/User';
import { decodeJwt } from 'jose';

export async function POST(req) {
    const { token } = await req.json();


    try {
        await connectToDB();

        const { phone } = await verifyAccessTokenThrowError(token);

        const user = await UserModel.findOne({ phone });

        if (!user) {
            return NextResponse.json({ valid: false }, { status: 401 });
        }

        return NextResponse.json({ valid: true, message: "for user", user }, { status: 200 });

    } catch (error) {
        if (error.message === 'TokenExpired') {
            try {
                // اطلاعات توکن را بدون اعتبارسنجی و بررسی امضا و انقضا استخراج کنید
                const payload = decodeJwt(token);

                // بازیابی رفرش توکن از دیتابیس
                const user = await UserModel.findOne({ phone: payload.phone });


                if (!user) {
                    return NextResponse.json({ valid: false }, { status: 401 });
                }

                const { phone , exp } = await verifyRefreshTokenThrowError(user.refreshToken);

                // تولید توکن دسترسی جدید
                const newAccessToken = await generateAccessToken({ phone });

                return NextResponse.json({ valid: true, newAccessToken, user , exp }, { status: 200 });

            } catch (refreshError) {
                // console.log('Refresh Token Invalid ->', refreshError);
                return NextResponse.json({ valid: false }, { status: 401 });
                
            }
        }

        return NextResponse.json({ valid: false }, { status: 401 });
    }
}
