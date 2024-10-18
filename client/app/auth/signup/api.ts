import axios from "axios";
import { Credentials } from "./types";
import {CurrentUser} from '@/types';

export const signup = async (credentials: Credentials) => {
    try {
        await axios.post<CurrentUser>('http://ticketing.dev/api/users/signup', credentials);
    } catch (e) {
        let msg = 'Something went wrong!';

        if (e.response.data?.errors) {
            msg = e.map((i) => i.message).join('. ');
        }

        throw new Error(msg);
    }
}
