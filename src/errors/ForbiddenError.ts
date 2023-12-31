export class ForbiddenError extends Error {
    status: number = 403;
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
