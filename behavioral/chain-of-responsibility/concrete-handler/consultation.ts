import { BaseHandler } from "../handler/base-handler";
import type { Request } from "../models/request";

export class ConsultationHandler extends BaseHandler {
    public handleRequest(request: Request): void {
        console.log(`[Consultation] Post-treatment consultation for: ${request.patient.name}`);
        request.healthStatus += "Consultation done";
        console.log(`[Final Status] ${request.healthStatus}`);
    }
}
