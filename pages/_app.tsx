import React from 'react'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import '../styles/main.scss'

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <NextNprogress
      color="#33c1e3"
      startPosition="0.3"
      stopDelayMs="200"
      height="5"
    />
    <Component {...pageProps} />
  </>
}
