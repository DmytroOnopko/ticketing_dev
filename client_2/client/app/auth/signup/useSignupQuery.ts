import { CustomError } from "@/types";
import { enqueueSnackbar } from "notistack";
import { signup } from "./api";
import { Credentials } from "./types";
import { Paths } from "@/paths";
import { useMutation } from "@tanstack/react-query";

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
