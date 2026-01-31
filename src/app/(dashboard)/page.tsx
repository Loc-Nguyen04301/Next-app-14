import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import { getAllCourses } from "@/lib/actions/course.actions";

const page = async () => {
  const courses = await getAllCourses()
  console.log({ courses })
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        {
          courses?.map((i) => <CourseItem data={i}></CourseItem>)
        }
      </CourseGrid>
    </div >
  );
};

export default page;
