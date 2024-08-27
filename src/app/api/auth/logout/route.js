import { cookies } from "next/headers";

export async function POST() {
  try {
    cookies().delete("token");
    cookies().delete("refresh-token");
    return Response.json({ message: "با موفقیت خارج شدید" }, { status: 201 });
  } catch (err) {
    return Response.json(
      { message: err },
      {
        status: 500,
      }
    );
  }
}
