import { cookies } from "next/headers";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { verifyAccessToken, verifyRefreshToken } from "./auth";
import { decodeJwt } from "jose";

const  testRefreshToken = async (token) => {
  const payloadToken = decodeJwt(token);
  if (!payloadToken) return null;

  const user = await UserModel.findOne({ phone: payloadToken.phone });
  if (!user) return null;

  const isRefreshTokenValid = await verifyRefreshToken(user.refreshToken);
  return isRefreshTokenValid ? user : null;
};

const authUser = async () => {
  await connectToDB();
  const token = cookies().get("token")?.value;
  if (!token) return null;

  const tokenPayload = await verifyAccessToken(token);
  return tokenPayload ? await UserModel.findOne({ phone: tokenPayload.phone }) : await  testRefreshToken(token);
};

const authAdmin = async () => {
  await connectToDB();
  const token = cookies().get("token")?.value;
  if (!token) return null;

  const tokenPayload = await verifyAccessToken(token);
  const user = tokenPayload ? await UserModel.findOne({ phone: tokenPayload.phone }) : await  testRefreshToken(token);
  
  return user && user.role === "ADMIN" ? user : null;
};

export { authUser, authAdmin };
