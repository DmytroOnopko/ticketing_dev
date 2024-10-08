import { CustomError } from "../errors/customError";

const DEFAULT_MSG = 'Error connecting to database';
const DEFAULT_STATUS_CODE = 500;

export class DatabaseConnectionError extends CustomError{
    constructor() {
        super(DEFAULT_MSG, DEFAULT_STATUS_CODE);

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializedErrors() {
        return [{
            message: this.message
        }]
    }
}
