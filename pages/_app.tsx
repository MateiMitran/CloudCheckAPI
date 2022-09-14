import type { AppProps } from 'next/app';
import React, {Component} from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}