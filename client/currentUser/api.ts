import axios from "axios";
import { CurrentUser, ErrorResponse } from "../shell/types";

export const getCurrentUser = async (): Promise<CurrentUser> => {
    try {
        const response = await axios.get<{currentUser: CurrentUser}>('/api/users/currentuser');
        debugger;
        return {
            id: response.data.currentUser.id,
            email: response.data.currentUser.email
        }
    } catch (e: ErrorResponse) {
        debugger;
        throw e.response?.data?.errors;
    }
}
