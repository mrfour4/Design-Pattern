export class Patient {
    constructor(
        public id: string,
        public name: string,
        public age: number,
        public medicalHistory: string[] = []
    ) {}

    displayInfo(): void {
        console.log(
            `Patient ID: ${this.id}, Name: ${this.name}, Age: ${
                this.age
            }, History: ${this.medicalHistory.join(", ")}`
        );
    }
}
