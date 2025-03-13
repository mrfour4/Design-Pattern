import { Entertainment } from "../entertainment";

export class TVShow extends Entertainment {
    constructor(name: string, duration: number, public seasons: number) {
        super(name, duration, "TV Show");
    }

    clone(): TVShow {
        return new TVShow(this.name, this.duration, this.seasons);
    }
}
