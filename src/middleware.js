// import { NextResponse } from 'next/server';
// import { verifyAccessToken, verifyRefreshToken, generateRefreshToken } from './utils/auth';
// import { cookies } from 'next/headers';

// export async function middleware(req) {
//     const accessToken = req.cookies.get('token')?.value;
//     const refreshToken = req.cookies.get('refreshToken')?.value;

//     // اگر توکنی وجود نداشت، کاربر را به صفحه لاگین هدایت کنید
//     if (!accessToken) {
//         return NextResponse.redirect(new URL('/login', req.url));
//     }

//     try {
//         // اعتبارسنجی توکن دسترسی
//         const phone = await verifyAccessToken(accessToken);



//         // اگر کاربر ادمین نیست و درخواست به پنل ادمین مربوط است، به صفحه اصلی هدایت شود
//         if (req.nextUrl.pathname.startsWith('/admin-panel') && user.role !== 'ADMIN') {
//             return NextResponse.redirect(new URL('/', req.url));
//         }

//         // ادامه درخواست در صورت اعتبار توکن
//         return NextResponse.next();

//     } catch (error) {
//         console.log('Access Token Expired or Invalid ->', error);

//         // اگر توکن منقضی شده بود، بررسی می‌کنیم که آیا رفرش توکن وجود دارد یا خیر
//         if (refreshToken) {
//             try {
//                 const refreshedUser = await verifyRefreshToken(refreshToken);

//                 // در صورت اعتبار رفرش توکن، یک توکن جدید ایجاد و ذخیره کنید
//                 const newAccessToken = await generateRefreshToken(refreshedUser)

//                 // کوکی‌های جدید را در پاسخ قرار دهید
//                 const response = NextResponse.next();
//                 response.cookies.set('token', newAccessToken, { httpOnly: true, secure: true, path: '/' });

//                 return response;
//             } catch (refreshError) {
//                 console.log('Refresh Token Invalid ->', refreshError);
//             }
//         }

//         // هدایت به صفحه لاگین در صورت عدم اعتبار یا نبودن رفرش توکن
//         return NextResponse.redirect(new URL('/login', req.url));
//     }
// }

// // اعمال این middleware فقط به مسیرهای خاص، مثلاً پنل ادمین
// export const config = {
//     matcher: ['/admin-panel/:path*', '/user-panel/:path*'], // مسیرهای محافظت‌شده
// };










import { NextResponse } from 'next/server';
import { verifyAccessToken, verifyRefreshToken, generateAccessToken } from './utils/auth';
// import UserModel from '@/models/User';
// import connectToDB from '@/configs/db';

export async function middleware(req) {
    // اتصال به دیتابیس
    // await connectToDB();

    // دریافت کوکی‌های مربوط به توکن
    const accessToken = req.cookies.get('token')?.value;
    const refreshToken = req.cookies.get('refreshToken')?.value;

    // بررسی وجود توکن دسترسی
    if (!accessToken) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // try {
    //     // اعتبارسنجی توکن دسترسی
    //     const { phone } = await verifyAccessToken(accessToken);

    //     // جستجو در دیتابیس بر اساس شماره تلفن
    //     const user = await UserModel.findOne({ phone });

    //     // اگر کاربر پیدا نشد یا نقش ادمین نداشت
    //     if (!user || (req.nextUrl.pathname.startsWith('/admin-panel') && user.role !== 'ADMIN')) {
    //         return NextResponse.redirect(new URL('/', req.url));
    //     }

    //     // ادامه درخواست در صورت اعتبار توکن و نقش مناسب
    //     return NextResponse.next();

    // } catch (error) {
    //     console.log('Access Token Expired or Invalid ->', error);

    //     // اگر توکن منقضی شده بود و رفرش توکن وجود داشت
    //     if (refreshToken) {
    //         try {
    //             const { phone } = await verifyRefreshToken(refreshToken);
                
    //             // تولید توکن دسترسی جدید
    //             const newAccessToken = await generateAccessToken({ phone });

    //             // به‌روزرسانی کوکی توکن دسترسی
    //             const response = NextResponse.next();
    //             response.cookies.set('token', newAccessToken, { httpOnly: true, secure: true, path: '/' });

    //             return response;
    //         } catch (refreshError) {
    //             console.log('Refresh Token Invalid ->', refreshError);
    //         }
    //     }

    //     // هدایت به صفحه لاگین در صورت عدم اعتبار توکن‌ها
    //     return NextResponse.redirect(new URL('/login', req.url));
    // }
}

// اعمال این middleware فقط به مسیرهای خاص
export const config = {
    matcher: ['/admin-panel/:path*', '/user-panel/:path*'], // مسیرهای محافظت‌شده
};
