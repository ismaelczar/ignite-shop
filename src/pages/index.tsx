import { HomeContainer, Product, Separator } from "@/styles/components/home"
import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "@/lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import { ValueFormatter } from "@/utils/formatter"
import Link from "next/link"
import Head from "next/head"
import { Bag } from 'phosphor-react'





interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {

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
                  <button>
                    <Bag size={32} weight="bold" color="#ffffff" />
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
      price: ValueFormatter.format(price.unit_amount !== null
        ? price.unit_amount / 100
        : 0),
      description: product.description
    }
  })
  return {
    props: {
      products
    },

    revalidate: 60 * 60 * 2,
  }
}