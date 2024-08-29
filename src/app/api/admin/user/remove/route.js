import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { authAdmin } from "@/app/api/utils/serverHelpers";
// import { authUser } from "@/utils/serverHelpers";

// export async function POST(req) {
//   try {
//     connectToDB();
//     const user = await authUser();
//     const body = await req.json();
//     const { name, email, phone } = body;

//     // Validation (You)

//     await UserModel.findOneAndUpdate(
//       { _id: user._id },
//       {
//         $set: {
//           name,
//           email,
//           phone,
//         },
//       }
//     );

//     return Response.json(
//       { message: "User updated successfully :))" },
//       { status: 200 }
//     );
//   } catch (err) {
//     return Response.json({ message: err }, { status: 500 });
//   }
// }

export async function DELETE(req) {
    try {
        connectToDB();
        const body = await req.json();

        const { id } = body;


        const isAdmin = await authAdmin();

        if (!isAdmin) {
            throw new Error("شما دسترسی لازم به عنوان ادمین ندارید");
        }


        const validationResult = await UserModel.removeUserValidation(body).catch((err) => {
            err.statusCode = 400;
            return err;
        });

        if (validationResult.statusCode && validationResult.statusCode === 400) {
            return Response.json({ message: validationResult.message, status: validationResult.statusCode }, { status: validationResult.statusCode });
        }

        const deletedUser = await UserModel.findOneAndDelete({
            _id: id,
        });

        if (!deletedUser) {
            return Response.json({ message: "کاربر یافت نشد " }, { status: 404 })
        }
        return Response.json({ message: "کاربر با موفقیت حدف شود" }, { status: 201 });
    } catch (err) {
        return Response.json({ message: err }, { status: 500 });
    }
}
