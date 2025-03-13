import { Entertainment } from "../entertainment";

export class Movie extends Entertainment {
    constructor(name: string, duration: number, public director: string) {
        super(name, duration, "Movie");
    }

    clone(): Movie {
        return new Movie(this.name, this.duration, this.director);
    }
}
