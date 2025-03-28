import type { MedicalService } from "../medical-service";

export class XRay implements MedicalService {
    getDescription(): string {
        return "Chụp X-quang";
    }

    getCost(): number {
        return 700000;
    }
}
