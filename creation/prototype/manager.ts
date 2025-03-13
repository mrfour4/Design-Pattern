import type { Entertainment } from "./entertainment";

export class EntertainmentManager {
    private programs: Entertainment[] = [];

    addProgram(program: Entertainment) {
        this.programs.push(program);
    }

    cloneProgram(index: number): Entertainment | null {
        if (index >= 0 && index < this.programs.length) {
            const clonedProgram = this.programs[index].clone();
            this.programs.push(clonedProgram);
            return clonedProgram;
        }
        return null;
    }

    listPrograms() {
        this.programs.forEach((program, index) => {
            console.log(
                `${index + 1}. [${program.type}] ${program.name} - ${
                    program.duration
                } mins`
            );
        });
    }
}
