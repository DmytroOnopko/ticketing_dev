import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from 'next/head';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Notistack } from "../components/Notistack";

const queryClient = new QueryClient();

const MyApp = (props: AppProps) => {
    const { Component, pageProps } = props;
    return (
        <AppCacheProvider>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={{}}>
                    <Notistack>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </Notistack>
                </ThemeProvider>
            </QueryClientProvider>

        </AppCacheProvider>
    );
};

export default MyApp;
