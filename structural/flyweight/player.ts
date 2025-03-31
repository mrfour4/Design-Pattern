import type { Team } from "./team";

export class Player {
    private name: string;
    private number: number;
    private position: string;
    private team: Team;

    constructor(name: string, number: number, position: string, team: Team) {
        this.name = name;
        this.number = number;
        this.position = position;
        this.team = team;
    }

    public getDetails(): void {
        console.log(`Player: ${this.name}, Number: ${this.number}, Position: ${this.position}`);
        console.log(this.team.getDetails());
    }
}