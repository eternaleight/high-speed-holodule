import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import ScrollObserver from '../../utils/scroll-observer'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouterChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange)
    }
  }, [router.events])

  return (
    <ScrollObserver>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || []
           function gtag(){dataLayer.push(arguments)}
           gtag('js', new Date())
           gtag('config', '${gtag.GA_MEASUREMENT_ID}')
           `,
        }}
      />
      <Component {...pageProps} />
    </ScrollObserver>
  )
}

export default MyApp
