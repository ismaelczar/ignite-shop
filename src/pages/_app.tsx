
import { GlobalStyled } from '@/styles/global'
import type { AppProps } from 'next/app'

import Logo from '@/assets/logoIgnite.svg'
import Image from "next/image"
import { Container, Header } from '@/styles/components/app'

GlobalStyled()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={Logo} alt="" />
      </Header>



      <Component {...pageProps} />
    </Container>
  )
}
