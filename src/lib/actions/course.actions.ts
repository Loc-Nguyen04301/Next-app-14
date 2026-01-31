"use server";
import CourseModal, { ICourse, ICreateCourseParam, IUpdateCourseParam } from "@/database/course.model";
import { connectToDatabase } from "@/lib/mongoose";
import { revalidatePath } from "next/cache";

export async function createCourse(params: ICreateCourseParam) {
  try {
    connectToDatabase();
    const course = await CourseModal.create(params);
    return {
      data: JSON.parse(JSON.stringify(course)),
      success: true
    };
  } catch (error) {
    console.log({ error });
  }
}

export async function getCourseBySlug({slug}:{slug:string}){
    try {
    connectToDatabase();
    const findCourse = await CourseModal.findOne({slug});
    return findCourse;
  } catch (error) {
    console.log({ error });
  }
}


export async function getAllCourses(): Promise<ICourse[] | undefined>{
    try {
    connectToDatabase();
    const courses = await CourseModal.find();
    return courses;
  } catch (error) {
    console.log({ error });
  }
}

export async function updateCourse(params: IUpdateCourseParam) {
  try {
    connectToDatabase();
    const findCourse = await CourseModal.findOne({slug: params.slug});
    if(!findCourse) return
    await CourseModal.findOneAndUpdate({slug:params.slug}, params.updateData, {new: true})
    
    revalidatePath("/")
  } catch (error) {
    console.log({ error });
  }
}