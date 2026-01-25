import { ECourseLevel, ECourseStatus } from "@/types/enum";
import { model, models, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  image: string;
  intro_url: string;
  desc: string;
  price: number;
  sale_price: number;
  slug: string;
  status: ECourseStatus;
  created_at: Date;
  author: Schema.Types.ObjectId;
  level: ECourseLevel;
  views: number[];
  rating: number[];
  info: {
    requirements: string[];
    benefits: string[];
    qa: {
      question: string;
      answer: string;
    }[];
  };
  lectures: Schema.Types.ObjectId[];
  _destroy?: boolean;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  image: {
    type: String,
  },

  intro_url: {
    type: String,
  },

  desc: {
    type: String,
  },

  price: {
    type: Number,
  },

  sale_price: {
    type: Number,
  },

  slug: {
    type: String,
  },

  status: {
    type: String,
    enum: Object.values(ECourseStatus),
    default: ECourseStatus.PENDING,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  level: {
    type: String,
    enum: Object.values(ECourseLevel),
    default: ECourseLevel.BEGINNER,
  },

  views: {
    type: [Number],
    default: [],
  },

  rating: {
    type: [Number],
    default: [0],
  },

  info: {
    requirements: {
      type: [String],
    },
    benefits: {
      type: [String],
    },
    qa: [
      {
        question: {
          type: String,
        },
        answer: {
          type: String,
        },
      },
    ],
  },

  lectures: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lecture",
    },
  ],

  _destroy: {
    type: Boolean,
    default: false,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = models.User || model<ICourse>("Course", courseSchema);

export default UserModel;
