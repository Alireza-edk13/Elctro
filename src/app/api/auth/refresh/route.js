import { NextResponse } from 'next/server';
import { verifyAccessTokenThrowError, verifyRefreshToken, generateAccessToken } from '@/app/api/utils/auth';
import connectToDB from '@/configs/db';
import UserModel from '@/models/User';
import { decodeJwt } from 'jose';

export async function POST(req) {
    const { token } = await req.json();


    try {
        // اتصال به دیتابیس
        await connectToDB();

        // اعتبارسنجی توکن دسترسی
        const { phone } = await verifyAccessTokenThrowError(token);

        // جستجو در دیتابیس بر اساس شماره تلفن
        const user = await UserModel.findOne({ phone });

        // اگر کاربر پیدا نشد
        if (!user) {
            return NextResponse.json({ valid: false }, { status: 401 });
        }

        return NextResponse.json({ valid: true, message: "for user", user }, { status: 200 });

    } catch (error) {
        console.log(error.message);
        if (error.message === 'TokenExpired') {
            console.log('is if refresh');

            try {
                // اطلاعات توکن را بدون اعتبارسنجی و بررسی امضا و انقضا استخراج کنید
                const payload = decodeJwt(token);

                console.log(payload);



                // بازیابی رفرش توکن از دیتابیس
                const user = await UserModel.findOne({ phone: payload.phone });

                console.log(user);

                if (!user) {
                    return NextResponse.json({ valid: false }, { status: 401 });
                }

                const { phone } = await verifyRefreshToken(user.refreshToken);

                // تولید توکن دسترسی جدید
                const newAccessToken = await generateAccessToken({ phone });

                return NextResponse.json({ valid: true, newAccessToken, user }, { status: 200 });

            } catch (refreshError) {
                console.log('Refresh Token Invalid ->', refreshError);
                return NextResponse.json({ valid: false }, { status: 401 });
            }
        }

        return NextResponse.json({ valid: false }, { status: 401 });
    }
}
