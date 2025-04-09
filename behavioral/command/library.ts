import type { Book } from "./entity/book";
import type { LibraryUser } from "./entity/library-user";

export class Library {
    borrowBook(user: LibraryUser, book: Book): void {
        if (!book.isAvailable) {
            console.log(`Book "${book.title}" is not available.`);
            return;
        }
        book.isAvailable = false;
        user.borrowBook(book);
        console.log(`${user.name} borrowed "${book.title}".`);
    }

    returnBook(user: LibraryUser, book: Book): void {
        if (!user.hasBorrowed(book)) {
            console.log(`${user.name} has not borrowed "${book.title}".`);
            return;
        }
        user.returnBook(book);
        book.isAvailable = true;
        console.log(`${user.name} returned "${book.title}".`);
    }

    renewBook(user: LibraryUser, book: Book): void {
        if (!user.hasBorrowed(book)) {
            console.log(
                `${user.name} cannot renew "${book.title}" because it was not borrowed.`
            );
            return;
        }
        console.log(`${user.name} renewed "${book.title}".`);
    }
}
