export abstract class Entertainment {
    constructor(
        public name: string,
        public duration: number,
        public type: string
    ) {}

    abstract clone(): Entertainment;
}
