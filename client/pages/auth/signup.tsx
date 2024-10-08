import { TextField } from "../components/Fields/TextField";
import { Control, useForm } from "react-hook-form";
import { Box, Button, Container, Typography } from "@mui/material";
import { Credentials } from "../auth/types";

const Signup = () => {
    const { control } = useForm<Credentials>();

    return (
        <Container maxWidth="sm"
                   sx={{
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       height: '100%'
                   }}
        >
            <Box component='form'
                 onSubmit={() => null}
                 sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     gap: 2,
                     maxWidth: 320,
                     minWidth: 180,
                     flex: 1,
                 }}>
                <Typography variant="h4" fontWeight={700} textAlign="center" pb={1}>Sign up</Typography>
                <TextField required control={control as Control<Credentials>} name="email" label="Email" type="email" />
                <TextField required control={control as Control<Credentials>} name="password" label="Password" type="password" />
                <Button variant="contained">Submit</Button>
            </Box>
        </Container>
    )
};

export default Signup;
