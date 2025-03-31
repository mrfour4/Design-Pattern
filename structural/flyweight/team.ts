export class Team {
    private name: string;
    private logo: string;
    private color: string;

    constructor(name: string, logo: string, color: string) {
        this.name = name;
        this.logo = logo;
        this.color = color;
    }

    public getDetails(): string {
        return `Team: ${this.name}, Logo: ${this.logo}, Color: ${this.color}`;
    }
}