'use client';
import { IconButton } from "@mui/material";
import { closeSnackbar, SnackbarKey, SnackbarProvider } from "notistack";
import { PropsWithChildren } from "react";
import CloseIcon from '@mui/icons-material/Close';

export const Notistack = ({children}: PropsWithChildren) => {
    return (
        <SnackbarProvider
            hideIconVariant
            maxSnack={5}
            autoHideDuration={3000}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            action={actionClose}>
            {children}
        </SnackbarProvider>
    )
};

const actionClose = (id: SnackbarKey) => (
    <IconButton onClick={() => closeSnackbar(id)}
                size="small"
                sx={{ color: 'white' }}>
        <CloseIcon fontSize="inherit"/>
    </IconButton>
);
