import { Control, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, Typography } from "@mui/material";

import { Credentials } from "./types";
import { useSignupQuery } from "../auth/useSignupQuery";
import { TextField } from "../../components/Fields/TextField";
import { useValidationSchema } from "./useValidationSchema";

const Signup = () => {
    const validationSchema = useValidationSchema();
    const { control, handleSubmit } = useForm<Credentials>({
        resolver: yupResolver(validationSchema)
    });
    const { mutate, isPending } = useSignupQuery();

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
            }}
        >
            <Box noValidate
                 component='form'
                 onSubmit={handleSubmit((credentials) => mutate(credentials))}
                 sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     gap: 2,
                     maxWidth: 320,
                     minWidth: 180,
                     flex: 1,
                 }}>
                <Typography
                    variant="h4"
                    fontWeight={700}
                    textAlign="center"
                    pb={1}
                >Sign Up</Typography>
                <TextField
                    required
                    disabled={isPending}
                    control={control as Control<Credentials>}
                    name="email"
                    label="Email"
                    type="email"
                />
                <TextField
                    required
                    disabled={isPending}
                    control={control as Control<Credentials>}
                    name="password"
                    label="Password"
                    type="password"
                />
                <Button
                    disabled={isPending}
                    variant="contained"
                    type="submit"
                >
                    Submit
                </Button>
            </Box>
        </Container>
    )
};

export default Signup;
