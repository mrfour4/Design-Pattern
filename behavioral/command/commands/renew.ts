import type { Book } from "../entity/book";
import type { LibraryUser } from "../entity/library-user";
import type { Library } from "../library";
import type { LibraryCommand } from "../library-command";

export class RenewBookCommand implements LibraryCommand {
    constructor(
        private library: Library,
        private user: LibraryUser,
        private book: Book
    ) {}

    execute(): void {
        this.library.renewBook(this.user, this.book);
    }
}
