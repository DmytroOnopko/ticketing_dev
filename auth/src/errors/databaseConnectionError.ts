import { CustomError } from "../errors/customError";

const DEFAULT_MSG = 'Error connecting to database';
const DEFAULT_STATUS_CODE = 500;

export class DatabaseConnectionError extends CustomError{
    readonly statusCode: number;
    readonly reason: string;

    constructor() {
        super(DEFAULT_MSG, DEFAULT_STATUS_CODE);

        this.reason = DEFAULT_MSG;
        this.statusCode = DEFAULT_STATUS_CODE;

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializedErrors() {
        return [{
            message: this.reason
        }]
    }
}
