import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { GetStaticProps } from "next"

import { HomeContainer, Product, Separator } from "@/styles/pages/home"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Bag } from 'phosphor-react'

import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"


interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    currency: string
    description: string
    sku: string
  }[]
}

export default function Home({ products }: HomeProps) {

  const { addItem } = useShoppingCart()
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <>
              <Product className="keen-slider__slide">
                <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                  <Image src={product.imageUrl} width={520} height={480} alt="" />
                </Link>

                <footer>
                  <Separator>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </Separator>
                  <button onClick={() => addItem(product, { count: 1 })}>
                    <Bag size={32} weight="bold" />
                  </button>
                </footer>
              </Product>
            </>
          )
        })}
      </HomeContainer>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount !== null
        ? price.unit_amount / 100
        : 0,
      description: product.description,
      currency: 'USD',
      sku: product.id
    }
  })

  return {
    props: {
      products
    },

    revalidate: 60 * 60 * 2, //2 hours
  }
}