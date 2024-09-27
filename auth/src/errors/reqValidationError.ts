import { ValidationError } from "express-validator";
import { CustomError } from "../errors/customError";

const DEFAULT_MSG = 'Bad request';
const DEFAULT_STATUS_CODE = 400;

export class ReqValidationError extends CustomError{
    readonly message: string;
    readonly statusCode: number;
    readonly errors: ValidationError[];

    constructor(errors: ValidationError[]) {
        super(DEFAULT_MSG, DEFAULT_STATUS_CODE);

        this.message = DEFAULT_MSG;
        this.statusCode = DEFAULT_STATUS_CODE;
        this.errors = errors;

        Object.setPrototypeOf(this, ReqValidationError.prototype);
    }

    serializedErrors() {
        return this.errors.map((e) => ({
            message: e.msg, ...(e.type === 'field' && {field: e.path})
        }))
    }

}
