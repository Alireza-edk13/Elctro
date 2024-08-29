// import { hash, compare } from "bcryptjs";
// import { sign, verify } from "jsonwebtoken";

// const hashPassword = async (password) => {
//     const hashedPassword = await hash(password, 12);
//     return hashedPassword;
// };

// const verifyPassword = async (password, hashedPassword) => {
//     const isValid = await compare(password, hashedPassword);
//     return isValid;
// };

// const generateAccessToken = (data) => {
//     const token = sign({ ...data }, process.env.AccessTokenSecretKey, {
//         expiresIn: "1d",
//     });
//     return token;
// };

// const verifyAccessToken = (token) => {
//     try {
//         const tokenPayload = verify(token, process.env.AccessTokenSecretKey);
//         return tokenPayload;
//     } catch (err) {
//         console.log("Verify Access Token Error ->", err);
//         return false;
//     }
// };
// const verifyRefreshToken = (refreshToken) => {
//     try {
//         const refreshTokenPayload = verify(refreshToken, process.env.RefreshTokenSecretKey);
//         return refreshTokenPayload;
//     } catch (err) {
//         console.log("Verify Access Token Error ->", err);
//         return false;
//     }
// };

// const generateRefreshToken = (data) => {
//     const token = sign({ ...data }, process.env.RefreshTokenSecretKey, {
//         expiresIn: "15d",
//     });
//     return token;
// };


// export {
//     hashPassword,
//     verifyPassword,
//     generateAccessToken,
//     verifyAccessToken,
//     generateRefreshToken,
//     verifyRefreshToken
// };



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
        .setExpirationTime("1d")
        .sign(secret);
    return token;
};

const verifyAccessToken = async (token) => {
    try {
        const secret = new TextEncoder().encode(process.env.AccessTokenSecretKey);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {
        console.log("Verify Access Token Error ->", err);
        return false;
    }
};

const generateRefreshToken = async (data) => {
    const secret = new TextEncoder().encode(process.env.RefreshTokenSecretKey);
    const token = await new SignJWT({ ...data })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("15d")
        .sign(secret);
    return token;
};

const verifyRefreshToken = async (token) => {
    try {
        const secret = new TextEncoder().encode(process.env.RefreshTokenSecretKey);
        const { payload } = await jwtVerify(token, secret);
        return payload;
    } catch (err) {
        console.log("Verify Refresh Token Error ->", err);
        return false;
    }
};

export {
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken
};
