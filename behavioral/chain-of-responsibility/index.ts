import { HospitalClient } from "./client";
import { Patient } from "./models/patient";

export class ChainOfResponsibilityBehavioral {
    static main(): void {
        const patient1 = new Patient(1, "John Doe", "Fever and cough");
        const patient2 = new Patient(2, "Jane Smith", "Headache and nausea");

        HospitalClient.processPatient(patient1);
        console.log("\n-----------------------------\n");
        HospitalClient.processPatient(patient2);
    }
}