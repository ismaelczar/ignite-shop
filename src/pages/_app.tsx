
import Layout from '@/components/Layout'
import { GlobalStyled } from '@/styles/global'
import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'


GlobalStyled() //É recomendado por fora do componente funcional...

export default function App({ Component, pageProps }: AppProps) {

  const stipeKey = String(process.env.STRIPE_PUBLIC_KEY)

  return (

    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stipeKey}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
      shouldPersist
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider >
  )
}
