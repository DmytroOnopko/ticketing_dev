import axios from "axios";
import { CurrentUser, ErrorResponse } from "../../shell/types";
import { Credentials } from "../auth/types";

export const signup = async (credentials: Credentials) => {
    try {
        await axios.post<CurrentUser>('/api/users/signup', credentials);
    } catch (e: ErrorResponse) {
        throw e.response?.data?.errors;
    }
}
