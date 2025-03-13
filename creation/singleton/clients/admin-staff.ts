import type { Patient } from "../patient";
import type { PatientRecordManager } from "../record-manager";

export class AdminStaff {
    constructor(private recordManager: PatientRecordManager) {}

    addNewPatient(patient: Patient): void {
        console.log("\nAdmin adding new patient:");
        this.recordManager.addPatient(patient);
    }
}
