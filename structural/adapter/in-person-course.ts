import type { Course } from "./course";

export class InPersonCourse implements Course {
    attendClass(): void {
        console.log("Attending in-person class.");
    }

    getSchedule(): string {
        return "Schedule for in-person course.";
    }

    start(): void {
        this.attendClass();
    }

    getDetails(): string {
        return this.getSchedule();
    }
}
