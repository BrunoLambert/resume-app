import { useState, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/layouts/main'
import { NextUIProvider } from "@nextui-org/system";
import "@/styling/globals.css";
import AppIntro from '@/components/intro';
import MainProvider from '@/providers/MainProvider';

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