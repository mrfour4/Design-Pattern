import type { Book } from "./book";

export class LibraryUser {
    public borrowedBooks: Book[] = [];

    constructor(public userId: string, public name: string) {}

    borrowBook(book: Book): void {
        this.borrowedBooks.push(book);
    }

    returnBook(book: Book): void {
        this.borrowedBooks = this.borrowedBooks.filter(
            (b) => b.bookId !== book.bookId
        );
    }

    hasBorrowed(book: Book): boolean {
        return this.borrowedBooks.some((b) => b.bookId === book.bookId);
    }
}
