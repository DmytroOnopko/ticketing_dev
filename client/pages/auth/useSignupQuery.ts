import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import Router from 'next/router';

import { signup } from "../auth/api";

import { Paths } from "../../shell/paths";
import { Credentials } from "../auth/types";
import { CustomError } from "shell/types";

export const useSignupQuery = () => {
    return useMutation<Credentials, CustomError[], Credentials>({
        mutationFn: signup,
        onError: (e) => {
            const result = e.map((i) => i.message).join('. ');
            enqueueSnackbar(result, {variant: "error"})
        },
        onSuccess: () => {
            Router.push(Paths.ROOT)
        }
    })
};
