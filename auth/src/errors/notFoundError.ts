import { CustomError } from "../errors/customError";

const DEFAULT_MSG = 'Page not found';
const DEFAULT_STATUS_CODE = 404;

export class NotFoundError extends CustomError {
    constructor() {
        super(DEFAULT_MSG, DEFAULT_STATUS_CODE);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializedErrors() {
        return [{
            message: this.message
        }];
    }
}
