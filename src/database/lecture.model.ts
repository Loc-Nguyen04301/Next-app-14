import { model, models, Schema } from "mongoose";

export interface ILecture extends Document {
  _id: string;
  title: string;
  course: Schema.Types.ObjectId;
  lessons: Schema.Types.ObjectId[];
  _destroy: boolean
  created_at: Date;
}


const lectureSchema = new Schema<ILecture>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  lessons: [{
    type: Schema.Types.ObjectId,
    ref: "Lesson",
  }],
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

const LectureModel = models.Lecture || model<ILecture>("Lecture", lectureSchema);

export default LectureModel;
