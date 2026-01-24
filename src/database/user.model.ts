import { EUserRole, EUserStatus } from "@/types/enum";
import { Document, model, models, Schema } from "mongoose";

export interface User extends Document {
  clerkId: string;
  name?: string;
  username: string;
  email_address: string;
  avatar?: string;
  status?: EUserStatus;
  role?: EUserRole;
  courses?: Schema.Types.ObjectId[];
  createdAt?: Date;
}

export interface IUserCreateParam {
  clerkId: string;
  name?: string;
  username: string;
  email_address: string;
}

const userSchema = new Schema<User>({
  clerkId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },

  name: {
    type: String,
    trim: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
  },

  email_address: {
    type: String,
    required: true,
    unique: true,
  },

  avatar: {
    type: String,
  },

  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.ACTIVE,
  },

  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },

  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  createdAt: [
    {
      type: Date,
      default: Date.now,
    },
  ],
});

const UserModel = models.User || model<User>("User", userSchema);

export default UserModel;
