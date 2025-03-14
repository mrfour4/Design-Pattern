import { Movie } from "./concrete-prototype/movie";
import { MusicEvent } from "./concrete-prototype/music-event";
import { TVShow } from "./concrete-prototype/tv-show";
import { EntertainmentManager } from "./manager";

export class PrototypeCreation {
    static main(): void {
        const manager = new EntertainmentManager();

        const movie = new Movie("Inception", 148, "Christopher Nolan");
        const tvShow = new TVShow("Breaking Bad", 60, 5);
        const musicEvent = new MusicEvent(
            "Coachella Festival",
            180,
            "Multiple Artists"
        );

        manager.addProgram(movie);
        manager.addProgram(tvShow);
        manager.addProgram(musicEvent);

        console.log("\nCloning the first program...");
        const clonedMovie = manager.cloneProgram(0);

        if (clonedMovie) {
            console.log(
                `Cloned Program: [${clonedMovie.type}] ${clonedMovie.name} - ${clonedMovie.duration} mins`
            );
        }

        console.log("\nList of programs after cloning:");
        manager.listPrograms();
    }
}
