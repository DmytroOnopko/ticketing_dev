export abstract class CustomError extends Error {
    readonly statusCode: number;

    protected constructor(message: string, statusCode: number) {
        super(message);

        this.statusCode = statusCode;

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializedErrors(): { message: string; field?: string }[];
}
