import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import ScrollObserver from '../../utils/scroll-observer'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ScrollObserver>
    <Component {...pageProps} />
  </ScrollObserver>
  )
}

export default MyApp
