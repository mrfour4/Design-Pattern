import type { Request } from "../models/request";
import type { Handler } from "./interface";

export abstract class BaseHandler implements Handler {
    private nextHandler: Handler | null = null;

    public setNextHandler(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handleRequest(request: Request): void {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }

    protected next(request: Request): void {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}