import { CustomError } from "../errors/customError";

const DEFAULT_MSG = 'Bad request';
const DEFAULT_STATUS_CODE = 400;

export class BadReqError extends CustomError {
    readonly message: string;
    readonly statusCode: number;

    constructor(message?: string, status?: number) {
        super(message ?? DEFAULT_MSG, status ?? DEFAULT_STATUS_CODE);

        this.message = message ?? DEFAULT_MSG;
        this.statusCode = status ?? DEFAULT_STATUS_CODE;

        Object.setPrototypeOf(this, BadReqError.prototype);
    }

    serializedErrors() {
        return [{
            message: this.message,
        }];
    }
}
