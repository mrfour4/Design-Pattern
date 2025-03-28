import type { MedicalService } from "../medical-service";

export class Consultation implements MedicalService {
    getDescription(): string {
        return "Khám bệnh";
    }

    getCost(): number {
        return 500000;
    }
}
