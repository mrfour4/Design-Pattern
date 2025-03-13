import { AdminStaff } from "./clients/admin-staff";
import { Doctor } from "./clients/doctor";
import { Nurse } from "./clients/nurse";
import { Patient } from "./patient";
import { PatientRecordManager } from "./record-manager";

export function singletonExample() {
    const patientManager = PatientRecordManager.getInstance();

    const doctor = new Doctor(patientManager);
    const nurse = new Nurse(patientManager);
    const admin = new AdminStaff(patientManager);

    const patient1 = new Patient("P001", "John Doe", 45, ["Diabetes"]);
    const patient2 = new Patient("P002", "Alice Smith", 32, ["Asthma"]);

    admin.addNewPatient(patient1);
    admin.addNewPatient(patient2);

    doctor.viewPatient("P001");

    nurse.viewPatient("P002");

    doctor.updatePatient("P001", {
        age: 46,
        medicalHistory: ["Diabetes", "High Blood Pressure"],
    });

    patientManager.listPatients();
}
