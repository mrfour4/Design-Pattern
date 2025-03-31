import { BaseHandler } from "../handler/base-handler";
import type { Request } from "../models/request";

export class DiagnosisHandler extends BaseHandler {
    public handleRequest(request: Request): void {
        console.log(`[Diagnosis] Diagnosing patient: ${request.patient.name}`);
        request.healthStatus += "Diagnosis done -> ";
        this.next(request);
    }
}