import { BaseHandler } from "../handler/base-handler";
import type { Request } from "../models/request";

export class ReceptionHandler extends BaseHandler {
    public handleRequest(request: Request): void {
        console.log(`[Reception] Checking patient info: ${request.patient.name} - Symptoms: ${request.patient.symptoms}`);
        request.healthStatus += "Reception done -> ";
        this.next(request);
    }
}
