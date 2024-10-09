import { Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "./api";

const CurrentUser = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['currentUser'],
        queryFn: getCurrentUser,
        refetchOnWindowFocus: false,
    })

    return(
        <Stack>
            <Typography variant='h3'>
                {isLoading ?? 'Loading...'}
                {!isLoading && data ? 'User is signin' : 'user is not authorized'}
            </Typography>
        </Stack>
    )
};

export default CurrentUser;
