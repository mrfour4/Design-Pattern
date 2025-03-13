import type { Patient } from "./patient";

export class PatientRecordManager {
    private static instance: PatientRecordManager;
    private patients: Map<string, Patient>;

    private constructor() {
        this.patients = new Map();
    }

    public static getInstance(): PatientRecordManager {
        if (!PatientRecordManager.instance) {
            PatientRecordManager.instance = new PatientRecordManager();
        }
        return PatientRecordManager.instance;
    }

    public addPatient(patient: Patient): void {
        if (this.patients.has(patient.id)) {
            console.log(`Patient with ID ${patient.id} already exists!`);
            return;
        }
        this.patients.set(patient.id, patient);
        console.log(`Patient ${patient.name} added successfully.`);
    }

    public updatePatient(id: string, newData: Partial<Patient>): void {
        if (!this.patients.has(id)) {
            console.log(`Patient with ID ${id} not found!`);
            return;
        }
        const existingPatient = this.patients.get(id)!;
        Object.assign(existingPatient, newData);
        console.log(`Patient ${existingPatient.name} updated successfully.`);
    }

    public getPatient(id: string): Patient | null {
        return this.patients.get(id) || null;
    }

    public listPatients(): void {
        console.log("\nList of Patients:");
        this.patients.forEach((patient) => patient.displayInfo());
    }
}
