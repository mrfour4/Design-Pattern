import { BaseHandler } from "../handler/base-handler";
import type { Request } from "../models/request";

export class TreatmentHandler extends BaseHandler {
    public handleRequest(request: Request): void {
        console.log(`[Treatment] Treating patient: ${request.patient.name}`);
        request.healthStatus += "Treatment done -> ";
        this.next(request);
    }
}
