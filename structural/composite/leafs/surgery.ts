import type { MedicalService } from "../medical-service";

export class Surgery implements MedicalService {
    getDescription(): string {
        return "Phẫu thuật";
    }

    getCost(): number {
        return 10000000;
    }
}
