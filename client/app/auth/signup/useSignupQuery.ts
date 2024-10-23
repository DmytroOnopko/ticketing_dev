import { useRouter } from 'next/navigation';
import { useSnackbar } from "notistack";
import { signup } from "./api";
import { Credentials } from "./types";
import { Paths } from "@/paths";
import { useMutation } from "@tanstack/react-query";

export const useSignupQuery = () => {
    const { enqueueSnackbar } = useSnackbar()
    const router = useRouter();

    return useMutation<Credentials, Error, Credentials>({
        mutationFn: signup,
        onError: (e) => enqueueSnackbar(e.message, {variant: "error"}),
        onSuccess: () => router.push(Paths.ROOT),
    })
};
