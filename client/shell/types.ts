export type CurrentUser = {
    id: string;
    email: string;
};

export interface CustomError {
    message: string;
    field?: string;
}

export interface ErrorResponse {
    response: {
        data: {
            errors: CustomError[]
        };
    }
}
