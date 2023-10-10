
import { GlobalStyled } from '@/styles/global'
import type { AppProps } from 'next/app'

GlobalStyled()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
