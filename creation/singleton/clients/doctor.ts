import type { Patient } from "../patient";
import type { PatientRecordManager } from "../record-manager";

export class Doctor {
    constructor(private recordManager: PatientRecordManager) {}

    viewPatient(id: string): void {
        const patient = this.recordManager.getPatient(id);
        if (patient) {
            console.log("\nDoctor viewing patient info:");
            patient.displayInfo();
        } else {
            console.log(`Patient with ID ${id} not found.`);
        }
    }

    updatePatient(id: string, newData: Partial<Patient>): void {
        console.log("\nDoctor updating patient info:");
        this.recordManager.updatePatient(id, newData);
    }
}
