import { BorrowBookCommand } from "./commands/borrow";
import { RenewBookCommand } from "./commands/renew";
import { ReturnBookCommand } from "./commands/return";
import { Book } from "./entity/book";
import { LibraryUser } from "./entity/library-user";
import { LibraryInvoker } from "./invoker";
import { Library } from "./library";

export class CommandBehavioral {
    static main(): void {
        const library = new Library();

        const user = new LibraryUser("u1", "Alice");
        const book1 = new Book("b1", "Clean Code");
        const book2 = new Book("b2", "The Pragmatic Programmer");

        const borrowBook1 = new BorrowBookCommand(library, user, book1);
        const borrowBook2 = new BorrowBookCommand(library, user, book2);
        const renewBook1 = new RenewBookCommand(library, user, book1);
        const returnBook1 = new ReturnBookCommand(library, user, book1);

        const invoker = new LibraryInvoker();
        invoker.addCommand(borrowBook1);
        invoker.addCommand(borrowBook2);
        invoker.addCommand(renewBook1);
        invoker.addCommand(returnBook1);
        invoker.executeAll();
    }
}
