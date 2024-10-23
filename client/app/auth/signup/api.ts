import axios from "axios";
import { Credentials } from "./types";
import {CurrentUser} from '@/types';

export const signup = async (credentials: Credentials) => {
    try {
        await axios.post<CurrentUser>('/api/users/signup', credentials);
    } catch (e) {
        let msg = 'Something went wrong!';
        const errors = e.response.data?.errors;

        if (errors) {
            msg = errors.map((i) => i.message).join('. ');
        }

        throw new Error(msg);
    }
}
