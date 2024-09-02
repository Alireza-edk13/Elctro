import { cookies } from "next/headers";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { verifyAccessToken, verifyRefreshToken } from "./auth";
import { decodeJwt } from "jose";

const authUser = async () => {
  await connectToDB();
  let token = cookies().get("token")?.value;
  if (token) {
    let tokenPayload = await verifyAccessToken(token);

    if (!tokenPayload) {
      const payloadToken = decodeJwt(token);
      if (payloadToken) {
        const userInfo = await UserModel.findOne({ phone: payloadToken.phone });
        if (userInfo) {
          const payloadRefreshToken = await verifyRefreshToken(userInfo.refreshToken);
          if (payloadRefreshToken) {
            return userInfo
          }
          return null
        }
        return null
      }
      return null
    }

    if (tokenPayload) {
      const user = await UserModel.findOne({ phone: tokenPayload.phone });
      return user
    }
  }

  return null
};

const authAdmin = async () => {
  connectToDB();
  const token = cookies().get("token")?.value;

  if (token) {
    let tokenPayload = await verifyAccessToken(token);
    if (!tokenPayload) {
      const payloadToken = decodeJwt(token);
      if (payloadToken) {
        const userInfo = await UserModel.findOne({ phone: payloadToken.phone });
        if (userInfo) {
          const payloadRefreshToken = await verifyRefreshToken(userInfo.refreshToken);
          if (payloadRefreshToken) {
            if (userInfo.role === "ADMIN") {
              return userInfo
            }
            return null
          }
          return null
        }
        return null
      }
      return null
    } else {
      const user = await UserModel.findOne({ phone: tokenPayload.phone });
      if (user.role === "ADMIN") {
        return user;
      }
      return null;
    }
  }
  return null;
};

export { authUser, authAdmin };
