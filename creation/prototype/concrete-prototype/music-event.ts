import { Entertainment } from "../entertainment";

export class MusicEvent extends Entertainment {
    constructor(name: string, duration: number, public artist: string) {
        super(name, duration, "Music Event");
    }

    clone(): MusicEvent {
        return new MusicEvent(this.name, this.duration, this.artist);
    }
}
