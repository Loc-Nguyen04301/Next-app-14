import UserModel, { IUserCreateParam } from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export default async function createUser(params: IUserCreateParam) {
  try {
    connectToDatabase();
    const newUser = await UserModel.create(params);
    return newUser;
  } catch (error) {
    console.log({ error });
  }
}
