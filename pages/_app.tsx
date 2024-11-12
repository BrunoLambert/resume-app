/* eslint-disable @typescript-eslint/no-empty-object-type */

import { useState, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/layouts/main'
import { NextUIProvider } from "@nextui-org/system";
import "@/styling/globals.css";
import AppIntro from '@/components/intro';
import MainProvider from '@/providers/MainProvider';
import Head from 'next/head';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const [showingIntro, setShowingIntro] = useState(true);

    return (
        <MainProvider>
            <Head>
                <title>Quem é Bruno Lambert?</title>
                <link rel="icon" href="/icon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Bem vindo! Começa mais sobre mim vendo todo o meu caminho para me tornar o melhor especialista frontend." />
                <meta property="og:image" content="/profile.jpg" />
            </Head>
            <NextUIProvider>
                <main className='dark text-foreground bg-background'>
                    {showingIntro && <AppIntro introIsFinish={() => setShowingIntro(false)} />}
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </main>
            </NextUIProvider>
        </MainProvider>
    )
}