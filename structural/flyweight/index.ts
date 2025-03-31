import { Player } from "./player";
import { PlayerFactory } from "./player-factory";

export class FlyweightStructural {
    static main(): void {
        const players: Player[] = [];

        const teamA = PlayerFactory.getTeam("Red Warriors", "RW-Logo", "Red");
        players.push(new Player("John Doe", 10, "Forward", teamA));
        players.push(new Player("Mike Smith", 8, "Midfielder", teamA));

        const teamB = PlayerFactory.getTeam("Blue Eagles", "BE-Logo", "Blue");
        players.push(new Player("Alex Brown", 5, "Defender", teamB));
        players.push(new Player("Chris Lee", 1, "Goalkeeper", teamB));


        const teamAAgain = PlayerFactory.getTeam("Red Warriors", "RW-Logo", "Red");
        players.push(new Player("Tom Clark", 9, "Forward", teamAAgain));


        console.log("\nFootball Players Information:");
        players.forEach((player) => player.getDetails());
    }
}