import { Team } from "./team";

export class PlayerFactory {
    private static teams: Map<string, Team> = new Map();

    public static getTeam(name: string, logo: string, color: string): Team {
        const key = `${name}-${logo}-${color}`;
        if (!this.teams.has(key)) {
            console.log(`Creating new team: ${name}`);
            const newTeam = new Team(name, logo, color);
            this.teams.set(key, newTeam);
        } else {
            console.log(`Reusing existing team: ${name}`);
        }
        return this.teams.get(key) as Team;
    }
}
