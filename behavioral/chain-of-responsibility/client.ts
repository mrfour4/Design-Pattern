import { ConsultationHandler } from "./concrete-handler/consultation";
import { DiagnosisHandler } from "./concrete-handler/diagnosis";
import { ReceptionHandler } from "./concrete-handler/reception";
import { TreatmentHandler } from "./concrete-handler/treatment";
import type { Patient } from "./models/patient";
import { Request } from "./models/request";

export class HospitalClient {
    public static processPatient(patient: Patient): void {
        const reception = new ReceptionHandler();
        const diagnosis = new DiagnosisHandler();
        const treatment = new TreatmentHandler();
        const consultation = new ConsultationHandler();

        reception.setNextHandler(diagnosis).setNextHandler(treatment).setNextHandler(consultation);

        const request = new Request(patient);
        console.log(`Starting process for patient: ${patient.name}\n`);
        reception.handleRequest(request);
    }
}
