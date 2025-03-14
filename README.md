# Design Patterns in Software Development

This repository contains implementations of various **Design Patterns** in software development. Each pattern is organized into its own directory with a **README** file explaining its concept, use cases, and implementation details.

## Design Patterns Included

### Creational Patterns

-   [Builder Pattern](./creation/builder/README.md) - Separates the construction of a complex object from its representation.

-   [Prototype Pattern](./creation/prototype/README.md) - Creates new objects by copying an existing object instead of instantiating from scratch.

-   [Singleton Pattern](./creation/singleton/README.md) - Ensures that a class has only one instance and provides global access to it.

### Structural Patterns

_(Coming soon...)_

### Behavioral Patterns

_(Coming soon...)_

## How to Run Example Code

1. Clone the repository and install dependencies using your preferred package manager:

    ```sh
    bun install   # or yarn install, pnpm install, npm install
    ```

2. Run the example code for a specific pattern using:

    ```sh
    bun dev       # or npm run dev, pnpm dev
    ```

3. In the file `/index.ts`, you can call the corresponding function to test a pattern:

    ```ts
    import { AbstractCreation } from "./creation/abstract";
    import { BuilderCreation } from "./creation/builder";

    AbstractCreation.main();
    BuilderCreation.main();
    ```

4. Check the console output to see the results of each design pattern implementation.

## Contributing

If you'd like to contribute, feel free to submit a pull request with improvements or additional design patterns.

## License

This project is licensed under the MIT License.
