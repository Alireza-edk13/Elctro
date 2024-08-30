import { NextResponse } from 'next/server';

export async function middleware(req) {
    const accessToken = req.cookies.get('token')?.value;


    if (!accessToken) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // ارسال درخواست به API Route برای اعتبارسنجی توکن و مدیریت رفرش توکن
    const response = await fetch(new URL('/api/auth/refresh', req.url), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: accessToken }),
    });



    const data = await response.json();



    // بررسی نقش کاربر
    if (data.valid && req.nextUrl.pathname.startsWith('/admin-panel') && data.user.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    if (!data.valid) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // اگر توکن جدیدی تولید شده باشد، آن را در کوکی ذخیره کنید
    if (data.newAccessToken) {
        const res = NextResponse.next();
        res.cookies.set('token', data.newAccessToken, { httpOnly: true, secure: true, path: '/' });
        return res;
    }

    // ادامه درخواست در صورت اعتبار توکن و نقش مناسب
    return NextResponse.next();
}

// مسیرهایی که middleware باید در آنها اعمال شود
export const config = {
    matcher: ['/admin-panel/:path*', '/user-panel/:path*'], // مسیرهای محافظت‌شده
};
