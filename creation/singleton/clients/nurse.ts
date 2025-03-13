import type { PatientRecordManager } from "../record-manager";

export class Nurse {
    constructor(private recordManager: PatientRecordManager) {}

    viewPatient(id: string): void {
        const patient = this.recordManager.getPatient(id);
        if (patient) {
            console.log("\nNurse viewing patient info:");
            patient.displayInfo();
        } else {
            console.log(`Patient with ID ${id} not found.`);
        }
    }
}
