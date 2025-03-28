import type { SelfStudyCourse } from "../adaptee/self-study-course";
import type { Course } from "../course";

export class SelfStudyCourseAdapter implements Course {
    private selfStudyCourse: SelfStudyCourse;

    constructor(selfStudyCourse: SelfStudyCourse) {
        this.selfStudyCourse = selfStudyCourse;
    }

    start(): void {
        this.selfStudyCourse.accessMaterial();
    }

    getDetails(): string {
        return this.selfStudyCourse.getDeadline();
    }
}
