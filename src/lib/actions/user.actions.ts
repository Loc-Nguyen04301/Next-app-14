import UserModel, { IUserCreateParam } from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export async function createUser(params: IUserCreateParam) {
  try {
    connectToDatabase();
    const newUser = await UserModel.create(params);
    return newUser;
  } catch (error) {
    console.log({ error });
  }
}

export  async function getUserInfo({userId}:{userId:string}) {
  try {
    connectToDatabase();
    const findUser = await UserModel.findOne({clerkId: userId });
    if(!findUser) return null
    return findUser;
  } catch (error) {
    console.log({ error });
  }
}
