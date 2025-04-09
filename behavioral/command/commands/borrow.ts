import type { Book } from "../entity/book";
import type { LibraryUser } from "../entity/library-user";
import type { Library } from "../library";
import type { LibraryCommand } from "../library-command";

export class BorrowBookCommand implements LibraryCommand {
    constructor(
        private library: Library,
        private user: LibraryUser,
        private book: Book
    ) {}

    execute(): void {
        this.library.borrowBook(this.user, this.book);
    }
}
