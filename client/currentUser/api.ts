// import { CurrentUser, ErrorResponse } from "client_3/shell/types";

import axios from "axios";

export const getCurrentUser = async (): Promise => {
// .get<{currentUser: CurrentUser}>('/api/users/currentuser')
    debugger;
    try {
        // const response = await axios.get('/api/users/currentuser');
        // // return {
        // //     id: response.data.currentUser.id,
        // //     email: response.data.currentUser.email
        // // }
    } catch (e) {
        debugger;
        throw e.response?.data?.errors;
    }
}
