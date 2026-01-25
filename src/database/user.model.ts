import { EUserRole, EUserStatus } from "@/types/enum";
import { Document, model, models, Schema } from "mongoose";

export interface User extends Document {
  clerkId: string;
  name?: string;
  username: string;
  email: string;
  avatar?: string;
  status?: EUserStatus;
  role?: EUserRole;
  courses?: Schema.Types.ObjectId[];
  created_at?: Date;
}

export interface IUserCreateParam {
  clerkId: string;
  name?: string;
  username: string;
  email: string;
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
    unique: true,
    index: true,
    trim: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
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
  created_at: [
    {
      type: Date,
      default: Date.now,
    },
  ],
});

const UserModel = models.User || model<User>("User", userSchema);

export default UserModel;
