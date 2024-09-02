import { hash, compare } from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";

const hashPassword = async (password) => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
};

const generateAccessToken = async (data) => {
    const secret = new TextEncoder().encode(process.env.AccessTokenSecretKey);
    const token = await new SignJWT({ ...data })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("15m")
        .sign(secret);
    return token;
};

const verifyAccessToken = async (token) => {
    try {
        const secret = new TextEncoder().encode(process.env.AccessTokenSecretKey);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {
        return false;
    }
};

// for refresh route

const verifyAccessTokenThrowError = async (token) => {
    try {
        const secret = new TextEncoder().encode(process.env.AccessTokenSecretKey);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {        
        // بررسی خطای انقضا
        if (err.name === 'JWTExpired' || err.code === 'ERR_JWT_EXPIRED') {
            throw new Error('TokenExpired'); // خطای خاص برای انقضای توکن
        } else {
            throw new Error('TokenInvalid'); // خطای عمومی برای توکن نامعتبر
        }
    }
};


const generateRefreshToken = async (data) => {
    const secret = new TextEncoder().encode(process.env.RefreshTokenSecretKey);
    const token = await new SignJWT({ ...data })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("10d")
        .sign(secret);
    return token;
};

const verifyRefreshToken = async (token) => {
    try {
        const secret = new TextEncoder().encode(process.env.RefreshTokenSecretKey);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {
        return false
    }
};
const verifyRefreshTokenThrowError = async (token) => {
    try {
        const secret = new TextEncoder().encode(process.env.RefreshTokenSecretKey);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {
        // بررسی خطای انقضا
        if (err.name === 'JWTExpired') {
            throw new Error('TokenExpired'); // خطای خاص برای انقضای توکن
        } else {
            throw new Error('TokenInvalid'); // خطای عمومی برای توکن نامعتبر
        }
    }
};
export {
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    verifyAccessTokenThrowError,
    verifyRefreshTokenThrowError
};
