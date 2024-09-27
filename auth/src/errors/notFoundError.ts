import { CustomError } from "../errors/customError";

const DEFAULT_MSG = 'Page not found';
const DEFAULT_STATUS_CODE = 404;

export class NotFoundError extends CustomError {
    readonly message: string;
    readonly statusCode: number;

    constructor() {
        super(DEFAULT_MSG, DEFAULT_STATUS_CODE);

        this.message = DEFAULT_MSG;
        this.statusCode = DEFAULT_STATUS_CODE;

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializedErrors() {
        return [{
            message: this.message
        }];
    }
}
