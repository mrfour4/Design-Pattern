import type { Patient } from "./patient";

export class Request {
    constructor(public patient: Patient, public healthStatus: string = "") { }
}
