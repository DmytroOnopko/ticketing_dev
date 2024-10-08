import Head from 'next/head';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const MyApp = (props: AppProps) => {
    const { Component, pageProps } = props;
    return (
        <AppCacheProvider>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={{}}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </AppCacheProvider>
    );
};

export default MyApp;
