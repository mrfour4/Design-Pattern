export class Book {
    constructor(
        public bookId: string,
        public title: string,
        public isAvailable: boolean = true
    ) {}
}
