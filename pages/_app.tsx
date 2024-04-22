import type { AppProps } from 'next/app'

import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'
import Head from 'next/head'

import '../styles/globals.scss'

export type NextPageWithLayout<P = {}> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P>
type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <>
      <Head>
        <meta content={'initial-scale=1.0, width=device-width'} name={'viewport'} />
        <title>Next Events</title>
        <meta content={'Next JS Events'} name={'description'} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
