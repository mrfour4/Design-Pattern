import { CompositeMedicalService } from "./composite-medical";
import { Consultation } from "./leafs/consultation";
import { Surgery } from "./leafs/surgery";
import { XRay } from "./leafs/xray";

export class CompositeStructural {
    static main(): void {
        const consultation = new Consultation();
        const xray = new XRay();
        const surgery = new Surgery();

        const generalCheckup = new CompositeMedicalService(
            "Gói khám tổng quát"
        );
        generalCheckup.addService(consultation);
        generalCheckup.addService(xray);

        const surgeryPackage = new CompositeMedicalService(
            "Gói phẫu thuật đầy đủ"
        );
        surgeryPackage.addService(surgery);
        surgeryPackage.addService(generalCheckup);

        console.log(generalCheckup.getDescription());
        console.log("Tổng chi phí:", generalCheckup.getCost());

        console.log(surgeryPackage.getDescription());
        console.log("Tổng chi phí:", surgeryPackage.getCost());
    }
}
