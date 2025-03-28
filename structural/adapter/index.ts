import type { Course } from "./course";
import { InPersonCourse } from "./in-person-course";

import { OnlineCourse } from "./adaptee/online-course";
import { SelfStudyCourse } from "./adaptee/self-study-course";

import { OnlineCourseAdapter } from "./adapter/online-course";
import { SelfStudyCourseAdapter } from "./adapter/self-study-course";

export class AdapterStructural {
    static main(): void {
        const courses: Course[] = [
            new InPersonCourse(),
            new OnlineCourseAdapter(new OnlineCourse()),
            new SelfStudyCourseAdapter(new SelfStudyCourse()),
        ];

        courses.forEach((course) => {
            course.start();
            console.log(course.getDetails());
        });
    }
}
