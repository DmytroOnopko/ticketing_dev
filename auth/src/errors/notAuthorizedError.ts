import { CustomError } from "../errors/customError";

const DEFAULT_MSG = 'User is not authorized';
const DEFAULT_STATUS_CODE = 401;

export class NotAuthorizedError extends CustomError {
    constructor() {
        super(DEFAULT_MSG, DEFAULT_STATUS_CODE);

        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializedErrors() {
        return [{
            message: this.message,
        }];
    }

}
