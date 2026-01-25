import { ELessonType } from "@/types/enum";
import { model, models } from "mongoose";
import { Schema } from "mongoose";

export interface ILesson extends Document {
  _id: string;
  title: string;
  slug: string;
  lecture: Schema.Types.ObjectId;
  course: Schema.Types.ObjectId;
  order: number;
  duration: number;
  video_url: string;
  content: string;
  type: ELessonType;
  _destroy: boolean;
  created_at: Date;
}

const lessonSchema = new Schema<ILesson>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    index: true,
  },
  lecture: {
    type: Schema.Types.ObjectId,
    ref: "Lecture",
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  order: {
    type: Number,
    min: 0,
  },
  duration: {
    type: Number,
    default: 0,
  },
  video_url: {
    type: String,
  },
  content: {
    type: String,
  },
  type: {
    type: String,
    enum: Object.values(ELessonType),
    default: ELessonType.TEXT,
  },
  _destroy: {
    type: Boolean,
    default: false,
    index: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const LessonModel = models.Lesson || model<ILesson>("Lesson", lessonSchema);

export default LessonModel;
