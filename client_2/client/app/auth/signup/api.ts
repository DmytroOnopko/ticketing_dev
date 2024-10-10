import axios from "axios";
import { Credentials } from "./types";
import {CurrentUser, ResponseError} from '@/types';

export const signup = async (credentials: Credentials) => {
    try {
        await axios.post<CurrentUser>('/api/users/signup', credentials);
    } catch (e: ResponseError) {
        throw e.response?.data?.errors;
    }
}
