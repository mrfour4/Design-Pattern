import type { Request } from "../models/request";

export interface Handler {
    setNextHandler(handler: Handler): Handler;
    handleRequest(request: Request): void;
}
