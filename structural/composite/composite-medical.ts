import type { MedicalService } from "./medical-service";

export class CompositeMedicalService implements MedicalService {
    private services: MedicalService[] = [];

    constructor(private name: string) {}

    addService(service: MedicalService): void {
        this.services.push(service);
    }

    removeService(service: MedicalService): void {
        const index = this.services.indexOf(service);
        if (index !== -1) {
            this.services.splice(index, 1);
        }
    }

    getDescription(): string {
        const descriptions = this.services.map((s) => s.getDescription());
        return `${this.name} gồm: [${descriptions.join(", ")}]`;
    }

    getCost(): number {
        return this.services.reduce(
            (total, service) => total + service.getCost(),
            0
        );
    }
}
