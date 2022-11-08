import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from "next/app";
import "../styles/pageStyle.css";
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme/theme';
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
    <Head>
        <title>MermaidJS Interpreter</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
    </React.Fragment>
  );
}
