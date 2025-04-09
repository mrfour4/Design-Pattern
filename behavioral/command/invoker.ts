import type { LibraryCommand } from "./library-command";

export class LibraryInvoker {
    private commands: LibraryCommand[] = [];

    addCommand(command: LibraryCommand): void {
        this.commands.push(command);
    }

    executeAll(): void {
        for (const command of this.commands) {
            command.execute();
        }
        this.commands = [];
    }
}
