import type { OnlineCourse } from "../adaptee/online-course";
import type { Course } from "../course";

export class OnlineCourseAdapter implements Course {
    private onlineCourse: OnlineCourse;

    constructor(onlineCourse: OnlineCourse) {
        this.onlineCourse = onlineCourse;
    }

    start(): void {
        this.onlineCourse.joinSession();
    }

    getDetails(): string {
        return this.onlineCourse.viewTimetable();
    }
}
